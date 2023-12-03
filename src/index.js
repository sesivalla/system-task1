// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'; // Make sure this path is correct

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

