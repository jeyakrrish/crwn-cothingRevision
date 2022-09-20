import { createAction } from "../../utils/createAction";
import { CART_ACTION_TYPE } from "./cart.type";

export const setIsCartOpen = (bool) =>
  createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, bool);

export const addItemToCart = (productToAdd, cartItems) => {
  const newcartItems = addCartItem(productToAdd, cartItems);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newcartItems);
}
export const removeFromCart = (productToRemove, cartItems) => {
  const newcartItems = removeCartItem(productToRemove, cartItems);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newcartItems)
}
export const clearFromCart = (productToClear, cartItems) => {
  const newcartItems = clearCartItem(productToClear, cartItems);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newcartItems)
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