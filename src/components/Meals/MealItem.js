import { Fragment } from "react";
import React, {useState} from 'react';
import classes from './MealItem.module.css'
import MealInputForm from "./MealInputForm";

const MealItem = (props) => {
  const price = `$${props.price}`;
  //const updateCart = props.CartItems();


  const [EnteredAmount, setEnteredAmount] = useState('')
  const AmountChangeHandler = (event) => {
      setEnteredAmount(event.target.value);
      
  }

  const AmoundSubmitHandler = (event) => {
      event.preventDefault();
      console.log(EnteredAmount);
      console.log(props.name);
      props.CartItems(props.name);
  }
  

  
  


    return (
      <Fragment>
          <li className={classes.meal}>
            <div>
              <h3>{props.name}</h3>
              <div className={classes.description}>{props.desc}</div>
              <div className={classes.price}>{price}</div>
            </div>
            <MealInputForm onAmountChange={AmountChangeHandler} onAmountSubmit = {AmoundSubmitHandler}/>
          </li>
      </Fragment>
    );
  };
  
export default MealItem;