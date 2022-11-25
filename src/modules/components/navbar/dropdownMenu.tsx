import { RootState } from 'modules/redux/rootReducer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const DropdownMenu = (props: { menuToggle: string }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const { menuToggle } = props;
  return (
    <div
      className={`dropdown-menu ${theme}`}
      style={menuToggle == 'open' ? { right: '0px' } : { right: '-215px' }}
    >
      <Link
        to={'/login'}
        style={
          theme === 'darkTheme' ? { color: 'whitesmoke' } : { color: 'black' }
        }
      >
        login
      </Link>
      <Link
        to={'/register'}
        style={
          theme === 'darkTheme' ? { color: 'whitesmoke' } : { color: 'black' }
        }
      >
        register
      </Link>
      <a>ide logout button</a>
    </div>
  );
};
