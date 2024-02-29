import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './temp/header/Header.tsx';
import Home from './page/Home.tsx';
import Shop from './page/Shop.tsx';
import ProductDetail from './page/ProductDetail.tsx';
import ShopMenu from './page/shop_menu.tsx';
import ShopCart from './page/web_site/Shop_cart.tsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:type' element={<ShopMenu />} />
          <Route path='/shop_cart' element={<ShopCart />} />
          <Route path='/productDetail/:no' element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
