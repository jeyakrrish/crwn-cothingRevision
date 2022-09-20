import { createContext, useReducer } from 'react';
import { createAction } from '../utils/createAction';

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

export const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
}

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: !state.isCartOpen }
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, ...payload }
    default:
      break;
  }
}


const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  total: 0,
}

export const CartContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, cartCount, total } = state;

  const setCartItems = (cartItemsArray) => {
    const newcartCount = cartItemsArray.reduce((count, cartItem) => count + cartItem.quantity, 0);
    const newTotal = cartItemsArray.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);
   
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
      cartItems: cartItemsArray,
      cartCount : newcartCount,
      total: newTotal
    } ));
  }

  const setIsCartOpen = () =>
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN));

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

//?helper functions

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