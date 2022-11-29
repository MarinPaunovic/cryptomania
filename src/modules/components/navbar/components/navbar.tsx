import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CustomButton } from '../../customButton/';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'modules/redux/store';
import { useState } from 'react';
import { DropdownMenu } from './dropdownMenu';
import { HamburgerIcon } from '../../hamburgerIcon/hamburgerIcon';
import { ThemeToggle } from '../../themeToggle/themeToggle';
import { Link } from 'react-router-dom';

export const Navbar = ({
  isLogin,
  isRegister,
  isHomepage,
}: {
  isLogin: boolean;
  isRegister: boolean;
  isHomepage: boolean;
}) => {
  console.log(isLogin);
  const theme = useSelector((state: RootState) => state.theme.theme);
  const navigate = useNavigate();
  const [menuToggle, setMenuToggle] = useState('closed');

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
          {(isRegister || isHomepage) && (
            <Link to="/login" className={`loginButton ${theme}`}>
              Login
            </Link>
          )}
          {(isLogin || isHomepage) && (
            <Link to="/register" className="registerButton">
              Register
            </Link>
          )}
          <ThemeToggle className="bigTheme" />
          {!isRegister && !isLogin && (
            <div
              className="page-header-search"
              onClick={() => console.log('traži')}
            >
              <FontAwesomeIcon icon={faSearch} />
              <span>Search</span>
            </div>
          )}
        </div>
      </div>
      {menuToggle === 'open' && (
        <DropdownMenu menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      )}
    </header>
  );
};
