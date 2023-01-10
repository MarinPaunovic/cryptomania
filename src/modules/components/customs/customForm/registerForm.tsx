import { FormProvider } from 'react-hook-form';
import { Input } from '../customInput/input';
import { useAuthForm } from '../../../../shared/hooks/useAuthForm';
import { Link } from 'react-router-dom';

interface RegisterForm {
  theme: string;
}

export const RegisterForm: React.FC<RegisterForm> = ({ theme }) => {
  const { onSubmit, handleSubmit, watch, form } = useAuthForm(false);

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className={`login-form fc ${theme}`}>
        <div className="fc">
          <label htmlFor="username">Username</label>
          <Input name="username" />
        </div>
        <div className="fc">
          <label htmlFor="email">Email</label>
          <Input name="email" />
        </div>
        <div className="fc">
          <label htmlFor="password">Password</label>
          <Input
            name="password"
            isPassword={true}
            validate={{
              minLength: {
                value: 7,
                message: 'Password must have more than 6 characters',
              },
            }}
          />
        </div>
        <div className="fc">
          <label htmlFor="confirmPassword">Confirm password</label>
          <Input
            name="confirmPassword"
            isPassword={true}
            validate={{
              validate: (v) => {
                const password = watch('password');
                if (password !== v) {
                  return 'Passwords must match';
                }

                return true;
              },
            }}
          />
        </div>
        <div className="login-to-register-wrapper f">
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </div>
        <button title="Login" className={`login-button ${theme}`}>
          Register
        </button>
      </form>
    </FormProvider>
  );
};
