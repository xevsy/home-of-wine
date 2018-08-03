import { createStore, combineReducers } from 'redux';
import authReducer from '../reducers/auth';

const configureStore = createStore(
  combineReducers({
    auth: authReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;
