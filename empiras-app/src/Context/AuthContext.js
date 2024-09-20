import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (email, password) => {
    // Implement your login logic
    setCurrentUser({ email }); // Example: setting current user
  };

  const signup = async (email, password) => {
    // Implement your signup logic
    setCurrentUser({ email }); // Example: setting current user
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
