// src/contexts/CartContext.jsx
import React, { createContext, useState, useEffect } from 'react';

// Estructura de un ítem de carrito: { id, title, price, image, quantity }
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Inicializamos el carrito desde localStorage, si existe, o vacío
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('miEcommerce_cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Cada vez que cartItems cambia, lo guardamos en localStorage
  useEffect(() => {
    localStorage.setItem('miEcommerce_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Función para agregar producto al carrito
  const addToCart = (producto, cantidad = 1) => {
    setCartItems(prevItems => {
      const existe = prevItems.find(item => item.id === producto.id);
      if (existe) {
        // Si ya estaba, aumentamos la cantidad
        return prevItems.map(item =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity + cantidad }
            : item
        );
      } else {
        // Si no existe, lo agregamos con quantity
        return [...prevItems, { ...producto, quantity: cantidad }];
      }
    });
  };

  // Función para eliminar un ítem del carrito
  const removeFromCart = (productoId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productoId));
  };

  // Función para cambiar la cantidad de un ítem
  const updateQuantity = (productoId, nuevaCantidad) => {
    if (nuevaCantidad < 1) {
      // Si la cantidad propuesta es menor a 1, eliminamos el ítem
      removeFromCart(productoId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productoId
          ? { ...item, quantity: nuevaCantidad }
          : item
      )
    );
  };

  // Vaciar carrito completo
  const clearCart = () => {
    setCartItems([]);
  };

  // Calcular total de artículos (suma de quantities)
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Calcular suma total del carrito (precio * cantidad)
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
