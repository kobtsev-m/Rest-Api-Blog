import { createStore, combineReducers, applyMiddleware } from 'redux';
import postsReducer from './posts-reducer';
import categoriesReducer from './categories-reducer';

let reducers = combineReducers({
  postsData: postsReducer,
  categoriesData: categoriesReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
