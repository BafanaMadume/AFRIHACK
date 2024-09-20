import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext'; // Ensure this path is correct
// import Login from './components/Auth/Login'; // Ensure this path is correct
// import Register from './components/Auth/Register'; // Ensure this path is correct
import Dashboard from './components/Dashboard/Dashboard'; // Ensure this path is correct

const App = () => {
  return (
    <Router>
      {/* <AuthProvider> */}
        <Routes>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} /> {/* Default to Dashboard */}
        </Routes>
      {/* </AuthProvider> */}
    </Router>
  );
};

export default App;
