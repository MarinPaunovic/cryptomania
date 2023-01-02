import { RootState } from 'modules/redux/rootReducer';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

interface RouteProps {
  children: JSX.Element;
  navigate: string;
  message: string;
}

export const PrivateRoute: React.FC<RouteProps> = ({ children, navigate, message }) => {
  const [redirect, setRedirect] = useState(false);
  const { auth } = useSelector((state: RootState) => state.auth);

  if (auth.uid) return children;
  if (!redirect) {
    setTimeout(() => {
      setRedirect(true);
    }, 2500);
    return <div>{message}</div>;
  }
  return <Navigate to={navigate} />;
};
