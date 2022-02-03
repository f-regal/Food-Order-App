import { Fragment } from "react";
import React from 'react';
import classes from './MealItem.module.css'
import MealInputForm from "./MealInputForm";
import { useContext } from "react/cjs/react.development";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  const price = `$${props.price}`;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
      cartCtx.addItems({
        amount: amount,
        name: props.name,
        id: props.id,
        price: props.price})
  }


    return (
      <Fragment>
          <li className={classes.meal}>
            <div>
              <h3>{props.name}</h3>
              <div className={classes.description}>{props.desc}</div>
              <div className={classes.price}>{price}</div>
            </div>
            <MealInputForm id={props.id} onAddToCart={addToCartHandler}/>
          </li>
      </Fragment>
    );
  };
  
export default MealItem;