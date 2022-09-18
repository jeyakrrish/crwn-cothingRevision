import { useContext, useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

import { CategoriesMapContext } from '../../context/categoriesMapContext';

import ProductCard from '../productCard/productCard';
import './category.styles.scss';

const Category = () => {
  const { title } = useParams();
  
  const { categoriesMap } = useContext(CategoriesMapContext);
  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(categoriesMap[title])
  }, [products, categoriesMap, title])

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