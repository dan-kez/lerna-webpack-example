import React from 'react';
import { render } from 'react-dom';
import Leaf from '@dkez/leaf';
import Loadable from 'react-loadable';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// We set a route prefix so this will work when we deploy to github pages.
// If you fork this repo, update this value and in the webpack / package.json
// to be able to deploy to your repo as well.
const routePrefix = '/lerna-webpack-example';

// Create an async wrapper around our async-leaf component.
// We only want to load this component on the '/async' path
const LoadableAsyncLeaf = Loadable({
  loader: () => import(/* webpackChunkName: 'async-leaf' */ '@dkez/async-leaf'),
  delay: 5000,
  loading() {
    return (
      <div style={{ background: 'aqua', width: '100px', height: '100px' }}>
        Loading...
      </div>
    );
  },
});


const BasicRouting = () => (
  <Router>
    <div>
      <a href={`${routePrefix}/async`}>Hard redirect to /async</a>
      <br />
      <a href={`${routePrefix}/`}>Hard redirect to /</a>
      <br />
      <br />

      {/* We can still use external routing (e.g. page redirects) to load our components. */}
      <Route exact path={routePrefix} component={Leaf} />
      <Route path={`${routePrefix}/async`} component={LoadableAsyncLeaf} />
    </div>
  </Router>
);

// Create a react container dynamically so we don't rely on index.html in our example.
const container = document.createElement('div');
container.setAttribute('id', 'dynamic-react-root');
container.setAttribute('style', 'height: 100%; margin: 0;');
document.body.appendChild(container);

render((<BasicRouting />), container);
