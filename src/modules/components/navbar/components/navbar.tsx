import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'modules/redux/store';
import { useState, useEffect } from 'react';
import { DropdownMenu } from './dropdownMenu';
import { HamburgerIcon } from '../../hamburgerIcon/hamburgerIcon';
import { ThemeToggle } from '../../themeToggle/themeToggle';
import { Link } from 'react-router-dom';
import { UserDropdown } from './userDropdown';

export const Navbar = ({
  isLogin,
  isRegister,
  isHomepage,
}: {
  isLogin: boolean;
  isRegister: boolean;
  isHomepage: boolean;
}) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const navigate = useNavigate();
  const [menuToggle, setMenuToggle] = useState('closed');
  const isLoggedIn = useSelector((state: RootState) => state.auth.auth);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  function getWindowSize() {
    setInnerWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', getWindowSize);
    return () => {
      window.removeEventListener('resize', getWindowSize);
    };
  }, []);

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
        <ThemeToggle className="smallTheme" />
        {!isRegister && !isLogin && menuToggle === 'closed' && (
          <HamburgerIcon
            menuToggle={menuToggle}
            setMenuToggle={setMenuToggle}
            theme={theme}
          />
        )}
        <div className="page-header-buttons">
          {(isRegister || isHomepage) && !isLoggedIn && (
            <Link to="/login" className={`login-button-navbar ${theme} `}>
              Login
            </Link>
          )}
          {(isLogin || isHomepage) && !isLoggedIn && (
            <Link to="/register" className="registerButton">
              Register
            </Link>
          )}
          <ThemeToggle className="bigTheme" />
          {!isRegister && !isLogin && (
            <div className="page-header-search">
              <FontAwesomeIcon icon={faSearch} />
              <span>Search</span>
            </div>
          )}
          {isLoggedIn && innerWidth > 670 && <UserDropdown />}
        </div>
      </div>

      {menuToggle === 'open' && (
        <DropdownMenu menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      )}
    </header>
  );
};
