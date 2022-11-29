import { Login } from 'modules/auth';
import { Navbar } from 'modules/components';

const LoginPage = () => {
  return (
    <>
      <Navbar isLogin={true} isRegister={false} isHomepage={false} />
      <Login />
    </>
  );
};

export default LoginPage;
