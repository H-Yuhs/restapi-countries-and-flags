import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextProvider } from './hooks/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <div className='wrapper'>
        <App />
      </div>
    </ContextProvider>
  </React.StrictMode>
);

