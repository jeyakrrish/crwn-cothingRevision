import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/categories.selector';

import ProductCard from '../productCard/productCard';
import Spinner from '../spinner/spinner';
import './category.styles.scss';

const Category = () => {
  const { title } = useParams();

  const [products, setProducts] = useState([]);

  //! useSelector(callback)
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    setProducts(categoriesMap[title])
  }, [categoriesMap, title])

  return (
    <>
      <h2 className='title'><span>{title.toLocaleUpperCase()}</span></h2>
      {
        !isLoading ? <div className='category-container'>
          <div className='products-container'>
            {products &&
              products.map(product =>
                <ProductCard key={product.id} product={product} />
              )
            }
          </div>
        </div> : <div className='spinner'><Spinner /></div>
      }
    </>
  )
}

export default Category;