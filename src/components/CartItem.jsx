// src/components/CartItem.jsx
import React from 'react';
import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e1e1e1;
  padding: 1rem 0;
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-right: 1rem;
`;

const Title = styled.div`
  flex: 2;
  font-size: 1rem;
  color: #333;
`;

const Price = styled.div`
  flex: 1;
  font-weight: bold;
  color: #2c3e50;
`;

const QuantityControls = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  button {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    margin: 0 0.5rem;
  }

  span {
    min-width: 20px;
    text-align: center;
  }
`;

const Subtotal = styled.div`
  flex: 1;
  font-weight: bold;
  color: #000;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #c0392b;
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 1rem;

  &:hover {
    color: #e74c3c;
  }
`;

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <ItemContainer>
      <Img src={item.image} alt={item.title} />
      <Title>{item.title}</Title>
      <Price>${item.price.toFixed(2)}</Price>
      
      <QuantityControls>
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
      </QuantityControls>

      <Subtotal>${(item.price * item.quantity).toFixed(2)}</Subtotal>

      <RemoveButton onClick={() => removeFromCart(item.id)}>
        <FaTrashAlt />
      </RemoveButton>
    </ItemContainer>
  );
};

export default CartItem;
