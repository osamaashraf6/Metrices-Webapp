import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import stockReducer from './stock/stock';
import companyReducer from './company/company';

const reducer = combineReducers({
  stockReducer,
  companyReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));
export default store;
