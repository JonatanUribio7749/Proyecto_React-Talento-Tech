// src/pages/CheckoutPage.jsx
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { CartContext } from '../contexts/CartContext';

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  background: #fafafa;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  color: #2c3e50;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;

const Button = styled.button`
  background: #27ae60;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease;
  width: 100%;

  &:hover {
    background: #219150;
  }

  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`;

const CheckoutPage = () => {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !direccion) {
      setMensaje('Completa todos los campos.');
      return;
    }
    // Simulamos éxito de compra
    clearCart();
    setMensaje('¡Compra realizada con éxito! Gracias por tu pedido.');
  };

  return (
    <Container>
      <Title>Checkout</Title>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío. Añade productos antes de hacer checkout.</p>
      ) : (
        <>
          <p>Total a Pagar: <strong>${totalPrice.toFixed(2)}</strong></p>
          <form onSubmit={handleSubmit}>
            <Label htmlFor="nombre">Nombre completo</Label>
            <Input
              id="nombre"
              type="text"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />

            <Label htmlFor="direccion">Dirección de envío</Label>
            <Input
              id="direccion"
              type="text"
              value={direccion}
              onChange={e => setDireccion(e.target.value)}
            />

            <Button type="submit">Confirmar compra</Button>
          </form>
          {mensaje && <p style={{ color: '#27ae60', marginTop: '1rem' }}>{mensaje}</p>}
        </>
      )}
    </Container>
  );
};

export default CheckoutPage;

