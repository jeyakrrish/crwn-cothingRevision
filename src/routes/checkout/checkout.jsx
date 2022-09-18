import { useContext } from 'react';
import CheckoutItem from '../../components/checkoutItem/checkoutItem';
import { CartContext } from '../../context/cartContext';
import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext);


  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <p className='header-block'>Product</p>
        <p className='header-block'>Description</p>
        <p className='header-block'>Quantity</p>
        <p className='header-block'>Price</p>
        <p className='header-block'>Remove</p>
      </div>
      {
        cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
      }
      <p className='total'>Total: {total}$</p>
    </div>
  )
}

export default Checkout;