import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/homepage';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'modules/db/db';
import { setLogin } from 'modules/redux/slices/auth';
import { PrivateRoute } from 'modules/router/privateRoute';
import UserProfilePage from 'pages/userProfile';
import { PublicRoute } from 'modules/router/publicRoute';
import { PortfolioPage } from 'pages/portfolioPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const authSub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        dispatch(setLogin({}));
        return;
      }
      dispatch(setLogin(user));
    });
    return () => {
      authSub();
    };
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/login"
            element={
              <PublicRoute navigate="/">
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute navigate="/">
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/user-profile"
            element={
              <PrivateRoute
                navigate="/login"
                message={'You have to be logged in to enter this page. Redirecting..'}
              >
                <UserProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/portfolio"
            element={
              <PrivateRoute
                navigate="/portfolio"
                message="You have to be logged in to enter this page. Redirecting.."
              >
                <PortfolioPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
