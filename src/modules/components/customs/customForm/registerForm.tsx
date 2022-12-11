import { singInWithGoogle } from 'modules/db/db';
import { FormProvider } from 'react-hook-form';
import { Input } from '../customInput/input';
import { useAuthForm } from '../../../../hooks/useAuthForm';

interface RegisterForm {
  theme: string;
}

export const RegisterForm = ({ theme }: { theme: string }) => {
  const { onSubmit, handleSubmit, watch, form } = useAuthForm(false);

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className={`login-form fc ${theme}`}>
        <div className="fc">
          <label htmlFor="username">Username</label>
          <Input name="username" theme={theme} />
        </div>
        <div className="fc">
          <label htmlFor="email">Email</label>
          <Input name="email" theme={theme} />
        </div>
        <div className="fc">
          <label htmlFor="password">Password</label>
          <Input
            name="password"
            theme={theme}
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
            theme={theme}
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
        <button title="Login" className={`login-button ${theme}`}>
          Register
        </button>
      </form>
    </FormProvider>
  );
};
