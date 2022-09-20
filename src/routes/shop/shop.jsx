import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import Category from '../../components/category/category';
import CategoriesPreview from '../../components/categoriesPreview/categoriesPreview';

import { getCategoriesAndDocs } from '../../utils/firebase-utils';

import './shop.styles.scss';
import { setCategoriesArray } from '../../store/categories/categories.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    const getCategoriesArray = async() => {
      const response = await getCategoriesAndDocs();  //querySnapshot.docs ARRAY
      dispatch(setCategoriesArray(response));
    }
    getCategoriesArray();
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':title' element={<Category />} />
    </Routes>
  )
}

export default Shop;