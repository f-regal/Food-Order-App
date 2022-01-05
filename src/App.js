import React, {useState} from 'react';
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

  //Create a context so that i can pass these through Meals all the way to Meal Input Form - create a List in Cart based on it
  const cartItems = [];
  const [cartList, setCartList] = (cartItems);

  const CartUpdater = (item) => {
    setCartList((item) => {
      //cartList.push(item);
      //console.log(item);
    });
  }

  //To get rid of error temporarily- remove the CartUpdate function and remove it from the props along the Meal chain

  
  
  return (
    <Fragment>
      <Header onCartDisplay = {CartDisplayHandler} />
      {cartShown && <Cart  onCartHide = {CartHideHandler}/>}
      <Meals onCartUpdate = {CartUpdater} />
    </Fragment>
  );
}

export default App;
