import React from 'react';
import ReactDOM from 'react-dom';
import Leaf from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Leaf />, div);
  ReactDOM.unmountComponentAtNode(div);
});
