import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectCategoriesMap } from '../../store/categories/categories.selector';

import ProductCard from '../productCard/productCard';
import './category.styles.scss';

const Category = () => {
  const { title } = useParams();
  
  const [products, setProducts] = useState([]);

  //! useSelector(callback)
  const categoriesMap = useSelector(selectCategoriesMap);

  useEffect(() => {
    setProducts(categoriesMap[title])
  }, [categoriesMap, title])

  return (
    <div className='category-container'>
      <h2 className='title'><span>{title.toLocaleUpperCase()}</span></h2>
      <div className='products-container'>
        {products &&
          products.map(product =>
            <ProductCard key={product.id} product={product} />
          )
        }
      </div>
    </div>
  )
}

export default Category;