import { useForm } from 'react-hook-form';

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const useRegister = () => {
  const form = useForm<FormData>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { handleSubmit, watch } = form;

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return {
    form,
    onSubmit,
    handleSubmit,
    watch,
  };
};
