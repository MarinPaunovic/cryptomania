import { CustomButton } from 'modules/components';
import { RootState } from 'modules/redux/rootReducer';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export const Login = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className={`login-container ${theme} fc`}>
      <div className={`login-wrapper fc ${theme}`}>
        <h1 className="login-title f">Login Page</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className={`login-form fc ${theme}`}
        >
          <div>
            <label htmlFor="username">Username</label>
            <input id="username" type={'text'} className={theme}></input>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type={'text'} className={theme}></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type={'password'} className={theme}></input>
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              id="confirmPassword"
              type={'password'}
              className={theme}
            ></input>
          </div>
          <div className="login-to-register-wrapper f">
            <p>Don't have an account yet?</p>
            <a href="/register">Register</a>
          </div>
          <CustomButton className={`login-button ${theme}`} title="Login" />
        </form>
      </div>
    </div>
  );
};
