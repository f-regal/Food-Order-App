import React, {useState} from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {

  const [cartShown, setCartShown] = useState(false);

  const CartDisplayHandler = (event) => {
        event.preventDefault();
        setCartShown(true);
        //console.log('cart status updated');
  }

  const CartHideHandler = (event) => {
    event.preventDefault();
    setCartShown(false);
  }
  
  return (
    <CartProvider>
      <Header onCartDisplay = {CartDisplayHandler} />
      {cartShown && <Cart  onCartHide = {CartHideHandler}/>}
      <Meals />
    </CartProvider>
  );
}

export default App;
