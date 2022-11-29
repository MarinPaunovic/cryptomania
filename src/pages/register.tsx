import { Register } from 'modules/auth';
import { Navbar } from 'modules/components';

const RegisterPage = () => {
  return (
    <>
      <Navbar isLogin={false} isRegister={true} isHomepage={false} />
      <Register />
    </>
  );
};

export default RegisterPage;
