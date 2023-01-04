import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'modules/db/db';
import { useForm } from 'react-hook-form';

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const useAuthForm = (isLogin: boolean) => {
  const form = useForm<FormData>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { handleSubmit, watch, getValues } = form;

  const onSubmit = () => {
    if (!isLogin) {
      createUserWithEmailAndPassword(auth, getValues('email'), getValues('password'));
    }
    signInWithEmailAndPassword(auth, getValues('email'), getValues('password'));
  };

  return { onSubmit, handleSubmit, watch, form };
};
