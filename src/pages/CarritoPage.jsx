// src/pages/CarritoPage.jsx
import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const ItemsContainer = styled.div`
  margin-bottom: 2rem;
`;

const Summary = styled.div`
  text-align: right;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  color: #fff;
  background: ${props => (props.primary ? '#27ae60' : '#c0392b')};
  transition: background 0.2s ease;

  &:hover {
    background: ${props => (props.primary ? '#219150' : '#e74c3c')};
  }

  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`;

const EmptyMsg = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #555;
  margin-top: 3rem;
`;

const CarritoPage = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
    totalItems
  } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <Container>
        <Title>Tu carrito está vacío</Title>
        <EmptyMsg>
          No has agregado productos aún. <Link to="/productos">Ver productos</Link>
        </EmptyMsg>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Tu Carrito ({totalItems} ítems)</Title>

      <ItemsContainer>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        ))}
      </ItemsContainer>

      <Summary>Total a Pagar: <strong>${totalPrice.toFixed(2)}</strong></Summary>

      <ButtonGroup>
        <Button onClick={clearCart}>Vaciar carrito</Button>
        <Button primary as={Link} to="/Checkout">
          Ir a Checkout
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default CarritoPage;
