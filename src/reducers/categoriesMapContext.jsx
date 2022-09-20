import { createContext, useEffect, useReducer } from 'react';
import { createAction } from '../utils/createAction';
// import { SHOP_DATA } from '../shopdata';
import { addCollectionAndDocs, getCategoriesAndDocs } from '../utils/firebase-utils';

export const CategoriesMapContext = createContext({
  categoriesMap: {},
});

export const CATEGORIESMAP_ACTION_TYPE = {
  SET_CATEGORIES_MAP: 'SET_CATEGORIESMAP'
}

const INITIAL_STATE = {
  categoriesMap: {},
}

const categoriesMapReducer = (state, { type, payload }) => {
  switch (type) {
    case CATEGORIESMAP_ACTION_TYPE.SET_CATEGORIESMAP:
      return { ...state, categoriesMap: payload };
    default:
      throw new Error("Unkown Action typed deducted in categoriesMapReducer");
  }
}

export const CategoriesMapContextProvider = ({ children }) => {
  const [{ categoriesMap }, dispatch] = useReducer(categoriesMapReducer, INITIAL_STATE);

  useEffect(() => {
    // addCollectionAndDocs("categories", SHOP_DATA);
    const setter = async () => {
      const response = await getCategoriesAndDocs();
      setCategoriesMap(response);
    }
    setter();

  }, [])

  const setCategoriesMap = (categoriesMap) =>
    dispatch(createAction(CATEGORIESMAP_ACTION_TYPE.SET_CATEGORIESMAP, categoriesMap))
  
    const value = {
    categoriesMap,
  }

  return (
    <CategoriesMapContext.Provider value={value}>
      {children}
    </CategoriesMapContext.Provider>
  )
}