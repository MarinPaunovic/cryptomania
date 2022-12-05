import { useState, useEffect } from 'react';
import { auth } from 'modules/db/db';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/redux/rootReducer';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { setOpen } from 'modules/redux/dropdown/userDropdownSlice';

interface UserDropdown {
  isUserDropdown: boolean;
  setIsUserDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserDropdown = ({
  setIsUserDropdown,
  isUserDropdown,
}: UserDropdown) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [userImg, setUserImg] = useState<string | null>();
  console.log(isUserDropdown);
  useEffect(() => {
    const authSub = onAuthStateChanged(auth, (user) => {
      if (!user) return;
      setUserImg(user.photoURL);
    });
    return () => {
      authSub();
    };
  }, []);

  return (
    <div
      className={`user-dropdown-wrapper ${isUserDropdown}`}
      onBlur={() => {
        console.log('gasi element');
      }}
    >
      <div className={`user-dropdown-activate-bg ${isUserDropdown}`}>
        <button
          className={`user-dropdown-activate f aic ${isUserDropdown}`}
          onClick={() => {
            // dispatch(setOpen(!isOpen));
            setIsUserDropdown(!isUserDropdown);
          }}
        >
          {userImg !== undefined || null ? (
            <img className="user-dropdown-img" src={`${userImg}`} />
          ) : (
            <img
              className="user-dropdown-img"
              src={require('images/userDefaultImg.png')}
            />
          )}
        </button>
      </div>
      {isUserDropdown && (
        <div className={`user-dropdown-menu ${isUserDropdown} fc ${theme}`}>
          <Link to={'/user-profile'} className={theme}>
            My profile
          </Link>
          <Link to={'/portfolio'} className={theme}>
            Portfolio
          </Link>
          <button
            className={theme}
            onClick={() => {
              signOut(auth);
              setIsUserDropdown(false);
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
