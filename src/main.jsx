import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ShopContextProvider from './Context/ShopContext.jsx';
import { Provider } from 'react-redux';
import store from './Store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </Provider>
);
