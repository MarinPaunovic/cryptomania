import { useState } from 'react';

export const useAuthForm = (isLogin: boolean) => {
  console.log(isLogin);

  const [username, setUsername] = useState('');
  const [isUsername, setIsUsername] = useState(true);
  const [email, setEmail] = useState('');
  const [isEmail, setIsEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [isPassword, setIsPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);
  const [isPasswordLength, setIsPasswordLength] = useState(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  function checkRequired(value: string) {
    if (!value) return false;

    return true;
  }

  function onLogin() {
    setIsUsername(checkRequired(username));
    setIsEmail(checkRequired(email));
    setIsPassword(checkRequired(password));
  }

  function onRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsUsername(checkRequired(username));
    setIsEmail(checkRequired(email));
    setIsPassword(checkRequired(password));
    setIsConfirmPassword(checkRequired(confirmPassword));

    if (!username || !email || !password || !confirmPassword) return;

    if (password !== confirmPassword) {
      setIsPasswordMatch(false);
      return;
    }
    if (password.length < 6) {
      setIsPasswordLength(false);
      return;
    }

    setIsPasswordLength(true);
    setIsPasswordMatch(true);

    //register user
  }

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (isLogin) {
  //     onLogin();
  //     return;
  //   }

  //   onRegister();
  // };

  function onUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function onEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function onPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function onConfirmPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(e.target.value);
  }

  return {
    isEmail,
    isPassword,
    isUsername,
    isPasswordMatch,
    isPasswordLength,
    isConfirmPassword,
    onLogin,
    onRegister,
    onEmailChange,
    onUsernameChange,
    onPasswordChange,
    onConfirmPasswordChange,
  };
};
