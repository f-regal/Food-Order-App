import React from "react";
import classes from './Header.module.css'
import burgers from '../UI/Images/burgersPic.jpg';

const Header = () => {



    return (
        <React.Fragment>
            <header className={classes.header} >
                <h1 className={classes.title}>ReactMeals</h1>
                <button className={classes.cartBtn}>Cart</button>
            </header>

            <div className={classes.container}>
                <img src={burgers} alt="Burger" />
                <img src={burgers} alt="Burger" />
                <img src={burgers} alt="Burger" />
                <img src={burgers} alt="Burger" />
            </div>

            <div className={classes.mealintro}>
                <h1 className={classes.mealintrotitle}>Delicious Food Deliverd, To You</h1>
                <p className={classes.mealintroinfo}>It’s been 10 years now and we like to think we’ve gotten pretty good at burgers and chips. We’re all about top quality beef, the best potatoes and good times. Don’t just take our word for it though, we’ll let our food and people do the talking. After all, we’re Just Being Honest…</p>
            </div>

        </React.Fragment>
    )
}

export default Header;