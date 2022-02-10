import React, {useContext, useEffect, useState} from "react";
import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import { Fragment } from "react/cjs/react.production.min";




const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);

    const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)

    const { items } = cartCtx;

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''} `

    

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer)
        }
            
    }, [items])

    

    return (
        <Fragment>
            <button className={btnClasses} onClick={props.onCartShow}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>
                    My Cart
                </span>
                <span className={classes.badge}>
                    {numberOfItems}
                </span>    
            </button>
        </Fragment>
    )
}

export default HeaderCartButton;