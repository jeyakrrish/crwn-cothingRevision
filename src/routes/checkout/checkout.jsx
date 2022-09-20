import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkoutItem/checkoutItem';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import { CheckoutContainer, CheckoutHeader, Total } from './checkout.styles';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <p className='header-block'>Product</p>
        <p className='header-block'>Description</p>
        <p className='header-block'>Quantity</p>
        <p className='header-block'>Price</p>
        <p className='header-block'>Remove</p>
      </CheckoutHeader>
      {
        cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
      }
      {cartItems.length ? <Total>Total: {total}$</Total> : null}
    </CheckoutContainer>
  )
}

export default Checkout;