import React from 'react';
import { render } from 'react-dom';
import Leaf from 'leaf';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('async-leaf'),
  delay: 5000,
  loading() {
    return (
      <div style={{ background: 'aqua', width: '100px', height: '100px' }}>
        Loading...
      </div>
    );
  },
});

// / WEBPACK COMMENT


const container = document.createElement('div');
container.setAttribute('id', 'dynamic-react-root');
container.setAttribute('style', 'height: 100%; margin: 0;');
document.body.appendChild(container);

render(
  (
    <div>
      <Leaf />
      <LoadableComponent />
    </div>
  ), container,
);
