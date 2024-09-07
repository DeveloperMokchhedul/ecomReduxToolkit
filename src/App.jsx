
import {  Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Cart from './page/Cart';
import ProductData from './page/ProductData';
import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';

function App() {


  return (
    <>
 <Navbar />
    {/* <Sidebar /> */}
    <Routes>
      <Route path = "/home"  element = {<Home />}/>
      <Route path = "/cart"  element = {<Cart />}/>
      <Route path = "/product"  element = {<ProductData />}/>
    </Routes>

    </>
  )
}

export default App
