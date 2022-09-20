import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart, clearFromCart, removeFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import './checkoutItem.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const increament = () => dispatch(addItemToCart(cartItem, cartItems));
  const decreament = () => dispatch(removeFromCart(cartItem, cartItems));
  const remove = () => dispatch(clearFromCart(cartItem, cartItems));

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <p className='name'>{name}</p>
      <p className='quantity'>
        <span className='arrow' onClick={decreament}>&#10096;</span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={increament}>&#10097;</span>
      </p>
      <p className='price'>{price}$</p>
      <p className='remove-button' onClick={remove}>&#10006;</p>
    </div>
  )
}

export default CheckoutItem;