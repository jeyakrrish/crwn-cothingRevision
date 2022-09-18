import { useContext } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button';
import CartItem from '../cartItem/cartItem';

import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/cartContext';

import { CartDropdownContainer, EmptyMessage, CartItems } from './cartDropdown.styles';

const CartDropdown = () => {
  const navigator = useNavigate();

  const { cartItems } = useContext(CartContext);

  const clickHandler = () => navigator('/checkout');
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ?
          cartItems.map(
            cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />
          ) : <EmptyMessage>Your cart is empty</EmptyMessage>
        }
      </CartItems>
      <Button type='button' buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={clickHandler}>
        Go to cart
      </Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown;