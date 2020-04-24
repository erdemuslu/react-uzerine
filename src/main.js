import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';

import Store from './Store';

import App from './App';

render(
  <Provider Store={Store}>
    <App />
  </Provider>, document.getElementById('root'),
);
