import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { DropdownMenu } from './dropdownMenu';
import { HamburgerIcon } from '../../hamburgerIcon/hamburgerIcon';
import { ThemeToggle } from '../../themeToggle/themeToggle';
import { Link } from 'react-router-dom';
import { UserDropdown } from './userDropdown';
import { Search } from './search';
import { RootState } from 'modules/redux/rootReducer';

export const Navbar = ({
  isLogin,
  isRegister,
  isHomepage,
  isUserProfile,
}: {
  isLogin?: boolean;
  isRegister?: boolean;
  isHomepage?: boolean;
  isUserProfile?: boolean;
}) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const navigate = useNavigate();
  const [menuToggle, setMenuToggle] = useState('closed');
  const [isUserDropdown, setIsUserDropdown] = useState(false);
  const { auth } = useSelector((state: RootState) => state.auth);
  return (
    <header className={`page-header ${theme}`}>
      <div className="page-header-wrapper main-align fr">
        <div
          className={`page-header-title ${theme}`}
          onClick={() => {
            navigate('/');
          }}
        >
          <img
            alt="title"
            className="page-header-title-img"
            src={require('images/cryptomania.jpg')}
          />
          Cryptomania
        </div>
        <div className="page-header-buttons-small fr">
          <Search isMobile={true} />
          <ThemeToggle className="smallTheme" />
          {!isRegister && !isLogin && menuToggle === 'closed' && (
            <HamburgerIcon menuToggle={menuToggle} setMenuToggle={setMenuToggle} theme={theme} />
          )}
        </div>
        <div className="page-header-buttons">
          {(isRegister || isHomepage) && !auth.uid && (
            <Link to="/login" className={`login-button-navbar ${theme}`}>
              Login
            </Link>
          )}
          {(isLogin || isHomepage) && !auth.uid && (
            <Link to="/register" className="registerButton">
              Register
            </Link>
          )}
          <ThemeToggle className="bigTheme" />
          {!isRegister && !isLogin && !isUserProfile && <Search />}
          {auth.uid && (
            <UserDropdown setIsUserDropdown={setIsUserDropdown} isUserDropdown={isUserDropdown} />
          )}
        </div>
      </div>

      {menuToggle === 'open' && (
        <DropdownMenu menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      )}
    </header>
  );
};
