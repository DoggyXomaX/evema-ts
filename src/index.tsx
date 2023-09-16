import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from 'stores/store';
import Evema from 'components/Evema';

const appContainer = document.getElementById('evema-app') as HTMLElement;
const root = createRoot(appContainer);

root.render(
  <Provider store={store}>
    <Evema />
  </Provider>,
);
