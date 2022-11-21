import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/homepage';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
