import React from 'react';
import ReactDOM from 'react-dom';
import AsyncLeaf from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AsyncLeaf />, div);
  ReactDOM.unmountComponentAtNode(div);
});
