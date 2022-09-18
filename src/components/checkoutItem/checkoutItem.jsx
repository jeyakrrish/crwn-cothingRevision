import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import './checkoutItem.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  const { addItemToCart, removeFromCart, clearFromCart } = useContext(CartContext);
  
  const increament = () => addItemToCart(cartItem);
  const decreament = () => removeFromCart(cartItem);
  const remove = () => clearFromCart(cartItem);

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