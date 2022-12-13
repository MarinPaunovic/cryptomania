import { Register } from 'modules/auth';
import { Navbar } from 'modules/components';

const RegisterPage = () => {
  return (
    <>
      <Navbar isRegister={true} />
      <Register />
    </>
  );
};

export default RegisterPage;
