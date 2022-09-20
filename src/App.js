import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom'

import NavigationBar from './components/navigation/navigation';
import Product from './components/product/product';
import Auth from './routes/auth/auth';
import Checkout from './routes/checkout/checkout';
import Home from './routes/home/home';
import Shop from './routes/shop/shop';
import { setCurrentUser } from './store/user/user.action';

import { getCurrentUser } from './utils/firebase-utils';

const App = () => {
  
  const dispatch = useDispatch();
  useEffect(()=>{
    const unSubscribe = getCurrentUser((user)=>{
      dispatch(setCurrentUser(user));
    })
    return unSubscribe;
  },[dispatch])

  return (
    <Routes>
      <Route path='/' element={<NavigationBar />} >
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Auth />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path=':id' element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;