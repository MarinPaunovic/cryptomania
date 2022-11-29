import { RootState } from 'modules/redux/rootReducer';
import { useSelector } from 'react-redux';

export const Register = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div className={`register-container ${theme}`}>Register Component</div>
  );
};
