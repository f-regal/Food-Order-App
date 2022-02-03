import { Fragment } from 'react';
import classes from './CartItem.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
const CartItem = (props) => {
  
    const cartCtx = useContext(CartContext);
    const price = `$${props.price}`;

    return (
        <Fragment>
          <li className={classes.cartitem}>
            <div>
              <h3>{props.name}</h3>
              <div className={classes.price}>{price}</div>
            </div>
            <div>
              <input className={classes.amount} type="text" id="amount" name="amount" value={props.amount} readOnly></input>
            </div>
            <div className={classes.plusminus}>
                <button className={classes.plus}>+</button>
                <button className={classes.minus}>-</button>
            </div>
          </li>
          <div>

          </div>
        </Fragment>
    );
  };
  
export default CartItem;