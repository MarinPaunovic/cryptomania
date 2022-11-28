import { RootState } from 'modules/redux/rootReducer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HamburgerIcon, Props } from './hamburgerIcon';

export const DropdownMenu: React.FC<Props> = ({
  menuToggle,
  setMenuToggle,
}) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div
      className={`dropdown-menu open ${theme}`}
      style={menuToggle == 'open' ? { right: '0px' } : { right: '-215px' }}
    >
      <HamburgerIcon
        theme={theme}
        menuToggle={menuToggle}
        setMenuToggle={setMenuToggle}
      />
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
