import { Fragment } from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  
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
                <button className={classes.plus} onClick={props.onAdd}>+</button>
                <button className={classes.minus} onClick={props.onRemove}>-</button>
            </div>
          </li>
          <div>

          </div>
        </Fragment>
    );
  };
  
export default CartItem;