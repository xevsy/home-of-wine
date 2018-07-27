import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import './firebase/firebase';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
