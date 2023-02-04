import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" className="nav-link" element={<Authentication />} />
        <Route path="shop" className="nav-link" element={<Shop />} />
        <Route path="checkout" className="nav-link" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
