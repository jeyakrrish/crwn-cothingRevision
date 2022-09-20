import { CART_ACTION_TYPE } from "./cart.type";

const INITIAL_STATE = {
  iscartOpen: false,
  cartItems: [],
}

export const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CART_ACTION_TYPE.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: payload };
    case CART_ACTION_TYPE.SET_CART_ITEMS:
      return { ...state, cartItems: payload };
    default:
      return state;
  }
}