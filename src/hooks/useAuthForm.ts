import { useState, useEffect } from 'react';

export function useAuthForm() {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  return {
    username,
    isUsername,
    email,
    isEmail,
    password,
    isPassword,
    confirmPassword,
    isConfirmPassword,
    isPasswordLength,
    isPasswordMatch,
  };
}
