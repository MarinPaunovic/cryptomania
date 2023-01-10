import { RootState } from 'modules/redux/rootReducer';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

interface RouteProps {
  children: JSX.Element;
  navigate: string;
}

export const PublicRoute: React.FC<RouteProps> = ({ children, navigate }) => {
  const { auth } = useSelector((state: RootState) => state.auth);

  if (!auth.uid) return children;

  return <Navigate to={navigate} />;
};
