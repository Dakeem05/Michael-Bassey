import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Services } from './Pages/Services.jsx';
import { About } from './Pages/About.jsx';
import { Blog } from './Pages/Blog.jsx';
import { Cart } from './Pages/Cart.jsx';
// import { Home } from './Pages/Home.jsx';
import { Products } from './Pages/Products.jsx';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>

  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <Routes>
      <Route path='/services' element={<Services/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/cart' element={<Cart/>} />
      {/* <Route path='/home' element={<Home/>} /> */}
      <Route path='/' element={<App/>} />
    </Routes>
    </ChakraProvider>
  </React.StrictMode>,
  </Router>
)
