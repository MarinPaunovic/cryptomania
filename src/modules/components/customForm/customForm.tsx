import React from 'react';
import { FormProvider } from 'react-hook-form';
import { Input } from './Input';
import { useRegister } from './useRegister';

interface CustomForm {
  isLogin: boolean;
  theme: string;
}

export const CustomForm = ({ theme }: CustomForm) => {
  const { onSubmit, handleSubmit, watch, form } = useRegister();

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`login-form fc ${theme}`}
      >
        <div>bla</div>
        <Input name="username" theme={theme} />
        <Input
          name="email"
          theme={theme}
          validate={{ minLength: { value: 3, message: 'mora bit veci od 3' } }}
        />
        <Input name="password" theme={theme} isPassword />
        <Input
          isPassword
          name="confirmPassword"
          theme={theme}
          validate={{
            validate: (v) => {
              const password = watch('password');

              if (password !== v) {
                return false;
              }
              return true;
            },
          }}
        />

        <button>submit</button>
      </form>
    </FormProvider>
  );
};
