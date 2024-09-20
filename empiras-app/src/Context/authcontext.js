import React, { createContext, useContext, useState } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // Mock user state

  const login = (email, password) => {
    // Mock login logic
    if (email === "user@example.com" && password === "password123") {
      setCurrentUser({ email });
      return true;
    } else {
      return false;
    }
  };

  const register = (email, password) => {
    // Mock register logic
    setCurrentUser({ email });
  };

  const logout = () => {
    setCurrentUser(null); // Clear user state
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
