import React from 'react';
import ReactDOM from 'react-dom/client';
import "./custom.scss"
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Not found</div>
  },
  {
    path: "products",
    element: <ProductsPage />,
  }
])


root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
