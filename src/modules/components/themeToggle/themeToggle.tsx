import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RootState } from 'modules/redux/rootReducer';
import { toggle } from 'modules/redux/theme/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ThemeToggle = ({ className }: { className: string }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  return (
    <div
      className={`page-header-theme ${className}`}
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
  );
};
