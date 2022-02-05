import { useContext } from 'react/cjs/react.development';
import { Fragment } from 'react/cjs/react.production.min';
import CartContext from '../../store/cart-context'
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount;
  const hasItems = cartCtx.items.length > 0;
  
    return (
      <Fragment>
        <div className={classes.backdrop} />

        <div className={classes.cart}>
          <ul>
              {cartCtx.items.map(item => <CartItem name={item.name} key={item.id} price={item.price} amount={item.amount}></CartItem>)}
          </ul>

          <div className={classes.total}>
            <h3 className={classes.totalTitle}>Total Amount</h3>
            <div className={classes.totalPrice}>${totalAmount.toFixed(2)}</div>
          </div>

          <div className={classes.closeorder}>
            <button className={classes.close} onClick={props.onCartHide}>Close</button>
            
            {hasItems && <button className={classes.order}>Order</button>}
          </div>

        </div>
      </Fragment>
     
    );
  };
  
export default Cart;