import React from 'react';
import ReactDOM from 'react-dom';
import FrontPage from './components/FrontPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FrontPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
