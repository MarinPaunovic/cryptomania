import { LoginForm } from 'modules/components/customs/customForm/loginForm';
import { singInWithGoogle } from 'modules/db/db';
import { RootState } from 'modules/redux/rootReducer';
import React from 'react';
import { useSelector } from 'react-redux';

export const Login = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={`login-container fc ${theme}`}>
      <div className={`login-wrapper fc ${theme}`}>
        <h1 className="login-title f">Login Page</h1>
        <LoginForm theme={theme} />
        <div className="login-button-google-wrapper f jcc">
          <button className={`login-button google`}>
            <img className="button-img-google" src={require('images/g-logo.png')} />
            <span onClick={() => singInWithGoogle()}> Log in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};
