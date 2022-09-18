import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { CategoriesMapContextProvider } from './context/categoriesMapContext';
import { UserContextProvider } from './context/userContext';
import { CartContextProvider } from './context/cartContext';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CategoriesMapContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </CategoriesMapContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);