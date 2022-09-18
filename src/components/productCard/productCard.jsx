import { useContext } from 'react';
import Button from '../button/button';

import { CartContext } from '../../context/cartContext';

import './productCard.styles.scss';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price, id } = product;

  const navigate = useNavigate();

  const clickHandle = () => navigate(`/${id}`)

  const { addItemToCart } = useContext(CartContext);

  const addcartItem = () => addItemToCart(product);

  return (
    <div className='product-card-container' >
      <img src={imageUrl} alt={name} onClick={clickHandle}/>
      <div className='footer'>
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <Button type='button' onClick={addcartItem}><span>Add to cart</span></Button>
    </div>
  )
}

export default ProductCard;