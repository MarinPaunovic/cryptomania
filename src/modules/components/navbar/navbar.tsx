import { faMoon, faSearch, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CustomButton } from '../customButton/customButton';
import { redirect, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from 'modules/redux/theme/themeSlice';
import { RootState } from 'modules/redux/store';

export const Navbar = () => {
    const theme = useSelector((state: RootState) => state.theme.theme);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
                <div className="page-header-buttons">
                    <CustomButton
                        className={`loginButton ${theme}`}
                        title="Login"
                    />
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
        </header>
    );
};
