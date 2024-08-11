import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './Components/NavBar';
import Cart from './Components/Cart';
import { Provider } from 'react-redux';
import { store } from './Middleware/store';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path = '/' element = {<NavBar />} >
    <Route index element={<App />} />
    <Route path = 'cart' element = {<Cart />} />
  </Route>
), { basename: process.env.NODE_ENV === 'production' ? '/Shopee' : '/' })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <RouterProvider router = {router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
