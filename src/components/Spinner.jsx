// src/components/Spinner.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${rotate} 1s linear infinite;
  margin: 2rem auto;
`;

const Spinner = () => {
  return <Loader />;
};

export default Spinner;
