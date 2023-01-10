import { RegisterForm } from 'modules/components/customs/customForm/registerForm';
import { singInWithGoogle } from 'modules/db/db';
import { RootState } from 'modules/redux/rootReducer';
import { useSelector } from 'react-redux';

export const Register = () => {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <div className={`login-container fc ${theme}`}>
      <div className={`login-wrapper fc ${theme}`}>
        <h1 className="login-title f">Register Page</h1>
        <RegisterForm theme={theme} />
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
