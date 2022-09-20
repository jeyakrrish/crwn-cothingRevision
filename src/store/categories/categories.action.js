import { CATEGORIES_ACTION_TYPE } from './categories.type';
import { createAction } from "../../utils/createAction";

export const setCategoriesArray = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_ARRAY, categoriesArray);