import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

const selectCategoriesArray = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.categoriesArray
)

export const selectCategoriesMap = createSelector(
  [selectCategoriesArray],
  (categoriesArray) => categoriesArray.reduce((acc, category)=>{
    const { title, items } = category;
    acc[title.toLocaleLowerCase()] = items;
    return acc;
  }, {})
)

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.isLoading
)

//* selector is the place where your business logics placed
//! reselect library included, it will make the function as memorized