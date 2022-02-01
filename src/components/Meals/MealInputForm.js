import classes from './MealInputForm.module.css'
import { useRef, useState } from 'react';

const MealInputForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountRef = useRef();
    
    const submitFormHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountRef.current.value; //Using refs to extract the Amount from the Input
        const enteredAmountNumber = +enteredAmount; //This was done to convert the enteredAmount into a number
        console.log(enteredAmountNumber);

        if (enteredAmount.trim().length === 0 || enteredAmountNumber > 5 || enteredAmountNumber < 1) {
            setAmountIsValid(false);
            return;
        } else {
            props.onAddToCart(enteredAmountNumber);
        }
    }
    

   

    
    return (
              <form onSubmit={submitFormHandler}>
                    <label><strong>Amount</strong></label>
                    <input ref={amountRef} className={classes.amount} type="number" id={props.id} name="amount" onChange={props.onAmountChange}></input><br></br>
                    <button className={classes.button} onClick={props.onAmountSubmit}>
                        <span className={classes.icon}>+</span>
                        <span className={classes.add}>
                            Add
                        </span>   
                    </button>
                    {!amountIsValid && <p>Please Enter a number between 1 - 5</p>}
              </form>
    );
  };
  
export default MealInputForm;