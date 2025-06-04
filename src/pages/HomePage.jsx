// src/pages/HomePage.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem 1rem;
`;

const Hero = styled.div`
  margin-top: 2rem;
  background: #ecf0f1;
  padding: 2rem;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #555;
`;

const Button = styled(Link)`
  background: #3498db;
  color: #fff;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  font-size: 1rem;
  border-radius: 4px;
  transition: background 0.2s ease;

  &:hover {
    background: #2980b9;
  }
`;

const HomePage = () => {
  return (
    <Container>
      <Hero>
        <Title>Bienvenido a Mi E-Commerce</Title>
        <Subtitle>Compra los mejores productos al mejor precio</Subtitle>
        <Button to="/productos">Ver Productos</Button>
      </Hero>
    </Container>
  );
};

export default HomePage;
