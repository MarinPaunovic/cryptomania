import { RootState } from 'modules/redux/rootReducer';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

interface RouteProps {
  children: JSX.Element;
  navigate: string;
}

export const PublicRoute: React.FC<RouteProps> = ({ children, navigate }) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.auth);
  if (!isLoggedIn) return children;
  return <Navigate to={navigate} />;
};
