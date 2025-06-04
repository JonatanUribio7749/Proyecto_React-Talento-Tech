// src/pages/ProductoDetallePage.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../components/Spinner';
import { fetchProductoPorId } from '../services/api';
import { CartContext } from '../contexts/CartContext';

const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const ImgContainer = styled.div`
  flex: 1 1 300px;
  text-align: center;

  img {
    max-width: 100%;
    height: 350px;
    object-fit: contain;
    border: 1px solid #e1e1e1;
    border-radius: 8px;
    padding: 1rem;
    background: #fff;
  }
`;

const InfoContainer = styled.div`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #e67e22;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  button {
    background: #bdc3c7;
    border: none;
    padding: 0.5rem 0.75rem;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      background: #95a5a6;
    }
  }

  span {
    margin: 0 1rem;
    font-size: 1.1rem;
  }
`;

const AddButton = styled.button`
  background: #3498db;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;
  transition: background 0.2s ease;

  &:hover {
    background: #2980b9;
  }

  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`;

const ProductoDetallePage = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    fetchProductoPorId(id)
      .then(data => {
        setProducto(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Error al cargar detalle de producto.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <p style={{ textAlign: 'center', color: '#e74c3c' }}>{error}</p>;
  if (!producto) return null;

  return (
    <Container>
      <ImgContainer>
        <img src={producto.image} alt={producto.title} />
      </ImgContainer>

      <InfoContainer>
        <Title>{producto.title}</Title>
        <Price>${producto.price.toFixed(2)}</Price>
        <Description>{producto.description}</Description>

        {/* Control de cantidad */}
        <QuantityControl>
          <button onClick={() => setCantidad(prev => (prev > 1 ? prev - 1 : 1))}>−</button>
          <span>{cantidad}</span>
          <button onClick={() => setCantidad(prev => prev + 1)}>＋</button>
        </QuantityControl>

        <AddButton onClick={() => addToCart(producto, cantidad)}>
          Añadir {cantidad} al carrito
        </AddButton>
      </InfoContainer>
    </Container>
  );
};

export default ProductoDetallePage;
