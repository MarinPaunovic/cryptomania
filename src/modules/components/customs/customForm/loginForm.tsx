import { FormProvider } from 'react-hook-form';
import { Input } from '../customInput/input';
import { useAuthForm } from '../../../../hooks/useAuthForm';
import { Link } from 'react-router-dom';

interface LoginForm {
  theme: string;
}

export const LoginForm = ({ theme }: LoginForm) => {
  console.log('login form');
  const { onSubmit, handleSubmit, form } = useAuthForm(true);

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className={`login-form fc ${theme}`}>
        <div>
          <label htmlFor="username">Username</label>
          <Input name="username" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input name="password" isPassword={true} />
        </div>
        <div className="login-to-register-wrapper f">
          <p>Don't have an account yet?</p>
          <Link to="/register">Register</Link>
        </div>
        <button title="Login" className={`login-button ${theme}`}>
          Login
        </button>
      </form>
    </FormProvider>
  );
};
