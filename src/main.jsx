import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Context from './Components/Context'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <Context>
    <StrictMode>
      <BrowserRouter>
        <App />
        <ToastContainer className="mt-10"/>
      </BrowserRouter>
    </StrictMode>
  </Context>
    //   if (!product) setProduct(products.filter((product) => product.id == id)[0]);
)
