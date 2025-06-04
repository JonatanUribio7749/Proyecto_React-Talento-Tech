// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';
import { AuthContext } from '../contexts/AuthContext';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 100;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #3498db;
  text-decoration: none;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  position: relative;
  padding: 0.5rem;

  &.active {
    color: #3498db;
  }

  &:hover {
    color: #3498db;
  }
`;

const CartIconContainer = styled.div`
  position: relative;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #3498db;
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #e74c3c;
  color: #fff;
  font-size: 0.75rem;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar = () => {
  const { totalItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <Nav>
      <Logo to="/">Mi E-Commerce</Logo>

      <Menu>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/productos">Productos</StyledLink>
        <StyledLink to="/carrito">
          <CartIconContainer>
            <FaShoppingCart />
            {totalItems > 0 && <Badge>{totalItems}</Badge>}
          </CartIconContainer>
        </StyledLink>
        {user ? (
          <>
            <StyledLink to="#" onClick={logout}>
              <FaUser /> (Salir)
            </StyledLink>
          </>
        ) : (
          <StyledLink to="/login">
            <FaUser /> Iniciar sesión
          </StyledLink>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
