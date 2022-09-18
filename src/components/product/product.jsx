import { useContext } from "react";
import { useParams } from "react-router-dom"
import { CartContext } from "../../context/cartContext";
import { CategoriesMapContext } from "../../context/categoriesMapContext";
import Button from "../button/button";

import './product.styles.scss';

const Product = () => {
  const { categoriesMap } = useContext(CategoriesMapContext);
  const { addItemToCart } = useContext(CartContext);
  const { id } = useParams();
  const Id = parseInt(id);

  return (
    <div className="product-container">
      {
        Object.values(categoriesMap).map(arr => {
          let a = arr.find(obj => obj.id === Id)
          return (
            a && <div key={a.id} className='product'>
              <img src={a.imageUrl} alt={a.name} />
              <div>
                <span>{a.name}</span>
                <span>{a.price}$</span>
              </div>
              <Button onClick={() => addItemToCart(a)}>Add to cart</Button>
            </div>
          );
        })
      }
    </div>
  )
}

export default Product;