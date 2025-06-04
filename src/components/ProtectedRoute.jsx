// src/components/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  // Si no hay usuario, redirigir a /login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Si está autenticado, renderizamos el componente hijo
  return children;
};

export default ProtectedRoute;
