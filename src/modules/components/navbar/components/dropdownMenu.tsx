import { RootState } from 'modules/redux/rootReducer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HamburgerIcon, Props } from '../../hamburgerIcon/hamburgerIcon';
import { signOut } from 'firebase/auth';
import { auth } from 'modules/db/db';

export const DropdownMenu: React.FC<Props> = ({ menuToggle, setMenuToggle }) => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const isAuth = useSelector((state: RootState) => state.auth.auth);

  return (
    <div className={`dropdown-menu ${menuToggle} ${theme} ffam-content`}>
      <HamburgerIcon theme={theme} menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      {!isAuth.uid && (
        <>
          <Link
            className={`dropdown__link ${theme}`}
            to={'/login'}
            style={theme === 'darkTheme' ? { color: 'whitesmoke' } : { color: 'black' }}
          >
            Login
          </Link>
          <Link
            className={`dropdown__link ${theme}`}
            to={'/register'}
            style={theme === 'darkTheme' ? { color: 'whitesmoke' } : { color: 'black' }}
          >
            Register
          </Link>
        </>
      )}
      {isAuth.uid && (
        <>
          <Link to={'/user-profile'} className={`dropdown__link ${theme}`}>
            My profile
          </Link>
          <Link to={'/portfolio'} className={`dropdown__link ${theme}`}>
            Portfolio
          </Link>
          <button
            className={`dropdown__button ${theme}`}
            onClick={() => {
              signOut(auth);
            }}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};
