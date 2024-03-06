import './App.css';
import './page/home.ts';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home.tsx';
import Shop from './page/Shop.tsx';
import ProductDetail from './page/ProductDetail.tsx';
import ShopMenu from './page/shop_menu.tsx';
import ShopCart from './page/web_site/Shop_cart.tsx';
import Visit from './page/Visit.tsx';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/visit/:page' element={<Visit />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:type' element={<ShopMenu />} />
          <Route path='/shop/:type/:list' element={<ShopMenu />} />
          <Route path='/shop_cart' element={<ShopCart />} />
          <Route path='/productDetail/:no' element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
