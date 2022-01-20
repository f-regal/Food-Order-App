import React, {useContext} from "react";
import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import { Fragment } from "react/cjs/react.production.min";



const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);

    const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)

    return (
        <Fragment>
            <button className={classes.button} onClick={props.onCartShow}>
            <span className={classes.icon}><CartIcon /></span>
            <span>
                My Cart
            </span>
            <span className={classes.badge}>{numberOfItems}</span>    
            </button>
        </Fragment>
    )
}

export default HeaderCartButton;