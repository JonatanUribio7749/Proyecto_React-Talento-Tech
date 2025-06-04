// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Estado que indica si hay un usuario “logueado”
  const [user, setUser] = useState(() => {
    // Intentar cargar usuario desde localStorage
    const savedUser = localStorage.getItem('miEcommerce_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const navigate = useNavigate();

  // Sincronizar user con localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('miEcommerce_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('miEcommerce_user');
    }
  }, [user]);

  // Función ficticia de login
  const login = (email, password) => {
    // Aquí, en un caso real, harías fetch a un servidor para validar credenciales.
    // Para esta Pre‐Entrega haremos un “login simulado”: 
    //   - Si el usuario ingresa cualquier email y password no vacío, lo consideramos “logueado”.
    if (email && password) {
      const fakeUser = { email }; 
      setUser(fakeUser);
      navigate('/productos'); // redirigir a /productos tras login exitoso
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
