import { useDispatch, useSelector } from 'react-redux';

import Button from '../button/button';

import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import './productCard.styles.scss';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price, id } = product;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  const clickHandle = () => navigate(`/${id}`)

  const addcartItem = () => dispatch(addItemToCart(product, cartItems));

  return (
    <div className='product-card-container' >
      <img src={imageUrl} alt={name} onClick={clickHandle} />
      <div className='footer'>
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <Button type='button' onClick={addcartItem}><span>Add to cart</span></Button>
    </div>
  )
}

export default ProductCard;