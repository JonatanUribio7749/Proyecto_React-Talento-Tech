// src/components/ProductCard.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 1rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`;

const Img = styled.img`
  max-width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #333;
  flex: 1;
`;

const Price = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #2c3e50;
  margin: 0.5rem 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const AddButton = styled.button`
  background: #3498db;
  color: #fff;
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s ease;

  &:hover {
    background: #2980b9;
  }

  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`;

const DetailLink = styled(Link)`
  background: #2ecc71;
  color: #fff;
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  text-align: center;
  transition: background 0.2s ease;

  &:hover {
    background: #27ae60;
  }
`;

const ProductCard = ({ producto, addToCart }) => {
  return (
    <Card>
      <Img src={producto.image} alt={producto.title} />
      <Title>{producto.title}</Title>
      <Price>${producto.price.toFixed(2)}</Price>
      <ButtonGroup>
        <AddButton onClick={() => addToCart(producto)}>
          Añadir al carrito
        </AddButton>
        <DetailLink to={`/producto/${producto.id}`}>
          Ver detalle
        </DetailLink>
      </ButtonGroup>
    </Card>
  );
};

export default ProductCard;
