import { Fragment } from 'react';

import CategoryPreview from '../categoryPreview/categoryPreview';

import { useSelector } from 'react-redux';

import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/categories.selector';
import Spinner from '../spinner/spinner';

const CategoriesPreview = () => {

  const isLoading = useSelector(selectCategoriesIsLoading);
  const categoriesMap  = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {!isLoading ? Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />
      }) : <div className='spinner'><Spinner/></div>
    }
    </Fragment>
  )
}

export default CategoriesPreview;