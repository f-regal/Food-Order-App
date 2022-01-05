import React from "react";
import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import { Fragment } from "react/cjs/react.production.min";



const HeaderCartButton = (props) => {

    return (
        <Fragment>
            <button className={classes.button} onClick={props.onCartShow}>
            <span className={classes.icon}><CartIcon /></span>
            <span>
                My Cart
            </span>
            <span className={classes.badge}>3</span>    
            </button>
        </Fragment>
    )
}

export default HeaderCartButton;