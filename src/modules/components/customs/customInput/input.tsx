import { HTMLAttributes } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface Props extends HTMLAttributes<HTMLInputElement> {
  name: string;
  theme: string;
  isPassword?: boolean;
  validate?: RegisterOptions;
}

export const Input: React.FC<Props> = ({ name, theme, isPassword, validate, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  return (
    <>
      <input
        type={isPassword ? 'password' : 'text'}
        {...register(name, {
          ...validate,
          required: {
            value: true,
            message: 'Field is required',
          },
        })}
        {...rest}
        className={error ? `${theme} empty-field` : `${theme}`}
      ></input>
      {error && error.message && (
        <span className="register-error-message">{error.message.toString()}</span>
      )}
    </>
  );
};
