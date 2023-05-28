import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes';
import {
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className='max-w-4xl mx-auto  bg-opacity-60'>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </React.StrictMode>,
)
