import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cartIcon.styles';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { cartCount } = useContext(CartContext);

  const toggle = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingIcon />
      <ItemCount className='item-count'>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;