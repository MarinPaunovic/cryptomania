import { CustomForm } from 'modules/components/customForm/customForm';
import { RootState } from 'modules/redux/rootReducer';
import { useSelector } from 'react-redux';

export const Register = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return <CustomForm theme={theme} isLogin={false} />;
};
