import { RootState } from 'modules/redux/rootReducer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HamburgerIcon, Props } from '../../hamburgerIcon/hamburgerIcon';
import { signOut } from 'firebase/auth';
import { auth } from 'modules/db/db';

export const DropdownMenu: React.FC<Props> = ({
  menuToggle,
  setMenuToggle,
}) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const isLoggedIn = useSelector((state: RootState) => state.auth.auth);
  console.log('hamburger component');
  return (
    <div
      className={`dropdown-menu ${menuToggle} ${theme}`}
      style={menuToggle == 'open' ? { right: '0px' } : { right: '-215px' }}
    >
      <HamburgerIcon
        theme={theme}
        menuToggle={menuToggle}
        setMenuToggle={setMenuToggle}
      />
      {!isLoggedIn && (
        <>
          <Link
            className="hamburger-element"
            to={'/login'}
            style={
              theme === 'darkTheme'
                ? { color: 'whitesmoke' }
                : { color: 'black' }
            }
          >
            login
          </Link>
          <Link
            className="hamburger-element"
            to={'/register'}
            style={
              theme === 'darkTheme'
                ? { color: 'whitesmoke' }
                : { color: 'black' }
            }
          >
            register
          </Link>
        </>
      )}
      {isLoggedIn && (
        <span className="hamburger-element" onClick={() => signOut(auth)}>
          Logout
        </span>
      )}
    </div>
  );
};
