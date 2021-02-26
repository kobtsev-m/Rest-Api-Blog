const SET_CATEGORIES = 'SET-CATEGORIES';

const initialState = {
  categories: []
};

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      };
    default:
      return state;
  }
}

export function setCategories(categories) {
  return { type: SET_CATEGORIES, categories };
}

export default categoriesReducer;
