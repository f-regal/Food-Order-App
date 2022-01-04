import React, {useState} from 'react';
import CartContext from './store/cart-context';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { Fragment } from 'react/cjs/react.production.min';

function App() {

  const [cartShown, setCartShown] = useState(false);

  const CartDisplayHandler = (event) => {
        event.preventDefault();
        setCartShown(true);
        console.log('cart status updated');
  }

  const CartHideHandler = (event) => {
    event.preventDefault();
    setCartShown(false);
}

  
  return (
    <Fragment>
      <Header onCartDisplay = {CartDisplayHandler} />
      {cartShown && <Cart  onCartHide = {CartHideHandler}/>}
      <Meals />
    </Fragment>
  );
}

export default App;
