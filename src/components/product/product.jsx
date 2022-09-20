import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import Button from "../button/button";

import './product.styles.scss';

const Product = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addcartItem = (product) => () => dispatch(addItemToCart(product, cartItems));
 
  const categoriesMap = useSelector(selectCategoriesMap);

  const { id } = useParams();
  const Id = parseInt(id);

  return (
    <div className="product-container">
      {
        Object.values(categoriesMap).map(arr => {
          let a = arr.find(obj => obj.id === Id);
          return (
            a && <div key={a.id} className='product'>
              <img src={a.imageUrl} alt={a.name} />
              <div>
                <span>{a.name}</span>
                <span>{a.price}$</span>
              </div>
              <Button onClick={addcartItem(a)}>Add to cart</Button>
            </div>
          );
        })
      }
    </div>
  )
}

export default Product;