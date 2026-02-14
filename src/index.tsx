
import React from 'react';
import ReactDOM from 'react-dom/client';
import clarity from '@microsoft/clarity';
import App from './App';

const CLARITY_PROJECT_ID = "ud91rv0370";
if (CLARITY_PROJECT_ID) {
  clarity.init(CLARITY_PROJECT_ID);
}

import ErrorBoundary from './components/ErrorBoundary';

const baseName = import.meta.env.BASE_URL;

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
