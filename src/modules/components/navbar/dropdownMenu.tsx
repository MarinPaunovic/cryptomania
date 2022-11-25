import { Link } from 'react-router-dom';

export const DropdownMenu = (props: { menuToggle: string }) => {
  const { menuToggle } = props;
  return (
    <div
      className={`dropdown-menu`}
      style={menuToggle == 'open' ? { right: '0px' } : { right: '-215px' }}
    >
      <Link to={'/login'}>login</Link>
      <Link to={'/register'}>register</Link>
      <a>ide logout button</a>
    </div>
  );
};
