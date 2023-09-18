import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Evema from 'components/Evema';

const appContainer = document.getElementById('evema-app') as HTMLElement;
const root = createRoot(appContainer);

const App = (
  <StrictMode>
    <Evema />
  </StrictMode>
);

root.render(App);
