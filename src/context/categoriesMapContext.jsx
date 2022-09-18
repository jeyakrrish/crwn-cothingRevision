import { createContext, useEffect, useState } from 'react';
// import { SHOP_DATA } from '../shopdata';
import { addCollectionAndDocs, getCategoriesAndDocs } from '../utils/firebase-utils';

export const CategoriesMapContext = createContext({
  categoriesMap: {},
});

export const CategoriesMapContextProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    // addCollectionAndDocs("categories", SHOP_DATA);
    const setter = async () => {
      const response  = await getCategoriesAndDocs();
      setCategoriesMap(response);
    }
    setter();

  }, [])

  const value = {
    categoriesMap,
  }

  return (
    <CategoriesMapContext.Provider value={value}>
      {children}
    </CategoriesMapContext.Provider>
  )
}