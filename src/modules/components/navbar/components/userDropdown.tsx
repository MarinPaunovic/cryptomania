import { useState, useEffect } from 'react';
import { auth } from 'modules/db/db';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/redux/rootReducer';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { setOpen } from 'modules/redux/dropdown/userDropdownSlice';

export const UserDropdown = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const isOpen = useSelector((state: RootState) => state.userDropdown.isOpen);
  const [userImg, setUserImg] = useState<string | null>();
  console.log('userDropdown component');
  const dispatch = useDispatch();

  useEffect(() => {
    const authSub = onAuthStateChanged(auth, (user) => {
      console.log('useEffect');
      if (!user) return;
      console.log('useEffect');
      setUserImg(user.photoURL);
    });
    return () => {
      authSub();
    };
  }, []);

  return (
    <div className={`user-dropdown-wrapper ${isOpen}`}>
      <div className={`user-dropdown-activate-bg ${isOpen}`}>
        <button
          className={`user-dropdown-activate f aic ${isOpen}`}
          onClick={() => {
            dispatch(setOpen(!isOpen));
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
      <div className={`user-dropdown-menu ${isOpen} fc ${theme}`}>
        <Link to={'/user-profile'} className={theme}>
          My profile
        </Link>
        <Link to={'/portfolio'} className={theme}>
          Portfolio{' '}
        </Link>
        <button
          className={theme}
          onClick={() => {
            signOut(auth);
            dispatch(setOpen(false));
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
