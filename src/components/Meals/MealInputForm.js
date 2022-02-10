import classes from './MealInputForm.module.css'
import { useRef } from 'react';

const MealInputForm = (props) => {

    const amountRef = useRef();
    
    const submitFormHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountRef.current.value; //Using refs to extract the Amount from the Input
        const enteredAmountNumber = +enteredAmount; //This was done to convert the enteredAmount into a number
        props.onAddToCart(enteredAmountNumber);

    }
    

    return (
              <form onSubmit={submitFormHandler}>
                    <label><strong>Amount</strong></label>
                    <input ref={amountRef} className={classes.amount} type="number" id={props.id} name="amount" max='5' min='1'></input><br></br>
                    <button className={classes.button} onClick={props.onAmountSubmit}>
                        <span className={classes.icon}>+</span>
                        <span className={classes.add}>
                            Add
                        </span>   
                    </button>
                    
              </form>
    );
  };
  
export default MealInputForm;