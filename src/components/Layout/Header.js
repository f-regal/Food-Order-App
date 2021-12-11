import React from "react";
import classes from './Header.module.css'

const Header = () => {



    return (
        <React.Fragment>
            <header className={classes.header} >
                <h1 className={classes.title}>ReactMeals</h1>
                <button className={classes.cartBtn}>Cart</button>
            </header>
        </React.Fragment>
    )
}

export default Header;