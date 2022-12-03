import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/homepage';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'modules/db/db';
import { setLogin } from 'modules/redux/auth/auth';
import { PrivateRoute } from 'modules/router/privateRoute';
import UserProfilePage from 'pages/userProfile';
import { PublicRoute } from 'modules/router/publicRoute';
import { setOpen } from 'modules/redux/dropdown/userDropdownSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const authSub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        dispatch(setLogin(false));
        return;
      }
      dispatch(setLogin(true));
    });
    return () => {
      authSub();
    };
  }, [dispatch]);
  const handleClick = (e: React.MouseEvent) => {
    if (!(e.target as Element).className.includes('user-dropdown')) {
      dispatch(setOpen(false));
    }
  };

  return (
    <div
      className="App"
      onClick={(e) => {
        handleClick(e);
      }}
    >
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
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/user-profile"
            element={
              <PrivateRoute
                navigate="/login"
                message={
                  'You have to be logged in to enter this page. Redirecting..'
                }
              >
                <UserProfilePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
