import { useNavigate } from 'react-router-dom';
import ProductCard from '../productCard/productCard';
import './categoryPreview.styles.scss';

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const clickHandler = () => navigate(`/shop/${title}`);
  
  return (
    <div className='category-preview-container'>
      <h2>
        <span className='title' onClick={clickHandler}>{title.toLocaleUpperCase()}</span>
      </h2>
      <div className='preview'>
        {
          products.filter((_, i) => i < 4).map(product =>
            <ProductCard product={product} key={product.id} />)
        }
      </div>
    </div>
  )
}

export default CategoryPreview;