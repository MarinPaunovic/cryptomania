import { RootState } from 'modules/redux/rootReducer';
import { HTMLAttributes } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';

interface Props extends HTMLAttributes<HTMLInputElement> {
  name: string;
  isPassword?: boolean;
  validate?: RegisterOptions;
}

export const Input: React.FC<Props> = ({ name, isPassword, validate, ...rest }) => {
  const { theme } = useSelector((state: RootState) => state.theme);
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
