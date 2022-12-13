import { Login } from 'modules/auth';
import { Navbar } from 'modules/components';

const LoginPage = () => {
  return (
    <>
      <Navbar isLogin={true} />
      <Login />
    </>
  );
};

export default LoginPage;
