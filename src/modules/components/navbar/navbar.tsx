import { faMoon, faSearch, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CustomButton } from '../customButton/customButton';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from 'modules/redux/theme/themeSlice';
import { RootState } from 'modules/redux/store';
import { useState } from 'react';
import { DropdownMenu } from './dropdownMenu';

export const Navbar = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
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
        {menuToggle === 'closed' && (
          <div
            className={`page-header-button-small ${menuToggle}`}
            onClick={() => {
              setMenuToggle('open');
            }}
          >
            <span
              className={`${
                theme === 'lightTheme' ? 'darkTheme' : 'lightTheme'
              }`}
            ></span>
            <span
              className={`${
                theme === 'lightTheme' ? 'darkTheme' : 'lightTheme'
              }`}
            ></span>
            <span
              className={`${
                theme === 'lightTheme' ? 'darkTheme' : 'lightTheme'
              }`}
            ></span>
          </div>
        )}
        <div className="page-header-buttons">
          <CustomButton className={`loginButton ${theme}`} title="Login" />
          <CustomButton className="registerButton" title="Register" />
          <div
            className="page-header-theme"
            onClick={() => {
              if (theme == 'lightTheme') {
                dispatch(toggle('darkTheme'));
                return;
              }
              dispatch(toggle('lightTheme'));
            }}
          >
            {theme == 'darkTheme' ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </div>
          <div
            className="page-header-search"
            onClick={() => console.log('traži')}
          >
            <FontAwesomeIcon icon={faSearch} />
            <span>Search</span>
          </div>
        </div>
      </div>
      {menuToggle === 'open' && (
        <div
          className={`page-header-button-small ${menuToggle}`}
          onClick={() => {
            setMenuToggle('closed');
          }}
        >
          <span
            className={`${theme === 'lightTheme' ? 'darkTheme' : 'lightTheme'}`}
          ></span>
          <span
            className={`${theme === 'lightTheme' ? 'darkTheme' : 'lightTheme'}`}
          ></span>
          <span
            className={`${theme === 'lightTheme' ? 'darkTheme' : 'lightTheme'}`}
          ></span>
        </div>
      )}
      <DropdownMenu menuToggle={menuToggle} />
    </header>
  );
};
