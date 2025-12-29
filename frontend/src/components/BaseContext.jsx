import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext({});


export default function BaseContext({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem('cart');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error('Ошибка парсинга cart:', e);
      return [];
    }
  });

  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem('user');
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.error('Ошибка парсинга user:', e);
      return null;
    }
  });

  const [token, setToken] = useState(() => {
    try {
      return localStorage.getItem('token') || null;
    } catch (e) {
      console.error('Ошибка чтения token:', e);
      return null;
    }
  });

  const [products, setProducts] = useState([]);
  const isAuthenticated = user && token;

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  }, [user, token]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const value = {
    user,
    setUser,
    token,
    setToken,
    isAuthenticated,
    products,
    setProducts,
    cart,
    setCart
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}
