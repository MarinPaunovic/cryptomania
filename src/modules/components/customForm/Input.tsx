import { HTMLAttributes } from 'react';
import { useFormContext, RegisterOptions } from 'react-hook-form';

interface Props extends HTMLAttributes<HTMLInputElement> {
  name: string;
  theme: string;
  isPassword?: boolean;
  validate?: RegisterOptions;
}

export const Input: React.FC<Props> = ({
  name,
  theme,
  validate,
  isPassword,
  ...rest
}) => {
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
      {error && error.message && <div>{error.message.toString()}</div>}
    </>
  );
};
