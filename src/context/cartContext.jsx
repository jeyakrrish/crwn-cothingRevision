import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  cartCount: 0,
  total: 0,
  removeFromCart: () => { },
  clearFromCart: () => { }
});

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newcartCount = cartItems.reduce((count, cartItem) => count + cartItem.quantity, 0);
    setCartCount(newcartCount);
  }, [cartItems])

  useEffect(() => {
    const newTotal = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);
    setTotal(newTotal);
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(productToAdd, cartItems));
  }
  const removeFromCart = (productToRemove) => {
    setCartItems(removeCartItem(productToRemove, cartItems))
  }
  const clearFromCart = (productToClear) => {
    setCartItems(clearCartItem(productToClear, cartItems))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    total,
    removeFromCart,
    clearFromCart
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

//helper functions

const addCartItem = (productToAdd, cartItems) => {
  //find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

  //if found increment the quantity
  if (existingCartItem) {
    return cartItems.map((item) => item.id === productToAdd.id ?
      { ...item, quantity: item.quantity + 1 } : item
    )
  }

  //return new array with modified cartItems / new cartItem
  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (productToRemove, cartItems) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id);

  //if found decrement the quantity
  if (existingCartItem) {

    if (productToRemove.quantity === 1)
      return cartItems.filter((item) => item.id !== productToRemove.id);

    return cartItems.map((item) => item.id === productToRemove.id ?
      { ...item, quantity: item.quantity - 1 } : item
    )
  }
}

const clearCartItem = (productToClear, cartItems) =>
  cartItems.filter((cartItem) => cartItem.id !== productToClear.id);