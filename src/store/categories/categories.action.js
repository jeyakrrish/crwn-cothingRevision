import { CATEGORIES_ACTION_TYPE } from './categories.type';
import { createAction } from "../../utils/createAction";
import { getCategoriesAndDocs } from '../../utils/firebase-utils';

// export const setCategoriesArray = (categoriesArray) =>
//   createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_ARRAY, categoriesArray);

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);

//!thunk action

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const response = await getCategoriesAndDocs();
    dispatch(fetchCategoriesSuccess(response));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
}