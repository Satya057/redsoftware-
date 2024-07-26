// context/AuthContex.js

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = (email, password) => {
    // Simulate a successful registration
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser({ email });
        resolve();
      }, 1000); // Simulate network delay
    });
  };

  const login = (email, password) => {
    // Simulate a successful login
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser({ email });
        resolve();
      }, 1000); // Simulate network delay
    });
  };

  const logout = () => {
    // Simulate logout
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
