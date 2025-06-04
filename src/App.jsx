// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductosPage from './pages/ProductosPage';
import ProductoDetallePage from './pages/ProductoDetallePage.jsx';
import CarritoPage from './pages/CarritoPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import CheckoutPage from './pages/CheckoutPage';

const App = () => {
  return (
    <>
      <Navbar />
      {/* Ejemplo: contenedor con padding superior para el navbar fijo */}
      <div style={{ paddingTop: '60px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/producto/:id" element={<ProductoDetallePage />} />

          {/* Rutas protegidas: /carrito sólo si user está auth */}
          <Route
            path="/carrito"
            element={
              <ProtectedRoute>
                <CarritoPage />
              </ProtectedRoute>
            }
          />
<Route
  path="/checkout"
  element={
    <ProtectedRoute>
      <CheckoutPage />
    </ProtectedRoute>
  }
/>

          <Route path="/login" element={<LoginPage />} />
          
          {/* Para rutas no definidas, redirigir a Home o mostrar 404 */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
