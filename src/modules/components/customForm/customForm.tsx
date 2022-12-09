import { singInWithGoogle } from 'modules/db/db';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CustomButton } from '../customButton';
import { useAuthForm } from './useAuthForm';

interface CustomForm {
  isLogin: boolean;
  theme: string;
}

export const CustomForm = ({ isLogin, theme }: CustomForm) => {
  const {
    isEmail,
    isPassword,
    isUsername,
    isPasswordMatch,
    isPasswordLength,
    onRegister,
    onEmailChange,
    onUsernameChange,
    onPasswordChange,
    onConfirmPasswordChange,
  } = useAuthForm(isLogin);

  return (
    <div className={`login-container ${theme} fc`}>
      <div className={`login-wrapper fc ${theme}`}>
        <h1 className="login-title f">
          {isLogin ? 'Login Page' : 'Register Page'}
        </h1>

        <form onSubmit={onRegister} className={`login-form fc ${theme}`}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className={!isUsername ? `${theme} empty-field` : `${theme}`}
              onChange={onUsernameChange}
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              className={!isEmail ? `${theme} empty-field` : `${theme}`}
              onChange={onEmailChange}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className={
                isPassword
                  ? isPasswordMatch
                    ? isPasswordLength
                      ? `${theme}`
                      : `${theme} .test`
                    : `${theme} password-match`
                  : `${theme} empty-field`
              }
              onChange={onPasswordChange}
            ></input>
            {!isPasswordLength && (
              <span className={'password-short'}>
                Your password must have more than 6 characters!
              </span>
            )}
            {!isPasswordMatch && (
              <span className={'password-match'}>
                Your passwords does not match
              </span>
            )}
          </div>
          {isLogin ? (
            <div className="login-to-register-wrapper f">
              <p>Don't have an account yet?</p>
              <Link to="/register">Register</Link>
            </div>
          ) : (
            <>
              <div>
                <label htmlFor="confirmPassword">Confirm password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  className={
                    isPasswordLength
                      ? isPasswordMatch
                        ? `${theme}`
                        : `${theme} test`
                      : `password-error ${theme}`
                  }
                  onChange={onConfirmPasswordChange}
                ></input>
              </div>
              <div className="login-to-register-wrapper f">
                <p>Already have an account?</p>
                <Link to="/login">Login</Link>
              </div>
            </>
          )}
          <button
            title={isLogin ? 'Login' : 'Register'}
            className={`login-button ${theme}`}
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        {isLogin && (
          <div className="login-button-google-wrapper f jcc">
            <button className={`login-button google`}>
              <img
                className="button-img-google"
                src={require('images/g-logo.png')}
                alt="Google icon"
              />
              <span onClick={() => singInWithGoogle()}>
                {' '}
                Log in with Google
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
