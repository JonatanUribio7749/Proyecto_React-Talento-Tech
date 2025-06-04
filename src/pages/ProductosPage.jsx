// src/pages/ProductosPage.jsx
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import Spinner from '../components/Spinner';
import { fetchProductos } from '../services/api';
import { CartContext } from '../contexts/CartContext';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
`;

const ErrorMsg = styled.p`
  color: #e74c3c;
  text-align: center;
  margin-top: 2rem;
`;

const ProductosPage = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    fetchProductos()
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Error al cargar los productos.');
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner />;
  if (error) return <ErrorMsg>{error}</ErrorMsg>;

  return (
    <Container>
      <Title>Todos los Productos</Title>
      <Grid>
        {productos.map(producto => (
          <ProductCard
            key={producto.id}
            producto={producto}
            addToCart={addToCart}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default ProductosPage;
