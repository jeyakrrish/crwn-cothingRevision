import { Route, Routes } from 'react-router-dom';
import Category from '../../components/category/category';
import CategoriesPreview from '../../components/categoriesPreview/categoriesPreview';

import './shop.styles.scss';
const Shop = () => {
  
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':title/*' element={<Category />} />
    </Routes>
  )
}

export default Shop;