import React, {useState} from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

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
    <React.Fragment>
      <Header onCartDisplay = {CartDisplayHandler} onCartHide = {CartHideHandler} />
      {cartShown && <Cart  onCartHide = {CartHideHandler}/>}
      <Meals />
    </React.Fragment>
  );
}

export default App;
