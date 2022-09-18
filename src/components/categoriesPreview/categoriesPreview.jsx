import { useContext } from 'react';
import { Fragment } from 'react';

import CategoryPreview from '../categoryPreview/categoryPreview';

import { CategoriesMapContext } from '../../context/categoriesMapContext';

const CategoriesPreview = () => {

  const { categoriesMap } = useContext(CategoriesMapContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </Fragment>
  )
}

export default CategoriesPreview;