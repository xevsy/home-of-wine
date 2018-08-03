import React from 'react';
import ReactDOM from 'react-dom';
import configureStore  from './store/configureStore';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';

export const store = configureStore;

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid, user.displayName));
  } else {
    store.dispatch(logout());
  }
});
