import React, {useState} from 'react';
import classes from './MealInputForm.module.css'

const MealInputForm = (props) => {

    const [EnteredAmount, setEnteredAmount] = useState('')
    const AmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log(EnteredAmount)
    }

    // const submitChangeHandler = (event) => {
    //     event.preventDefault()
    //     const expenseData = {
    //         amount: +EnteredAmount,
    //     }
    //     props.onSaveExpense(expenseData)
    //     setEnteredAmount('');
    // }

    return (
              <form>
                    <label for="amount"><strong>Amount</strong></label>
                    <input className={classes.amount} type="number" id="amount" name="amount" value={EnteredAmount} onChange={AmountChangeHandler}></input><br></br>
                    <button className={classes.button}>
                        <span className={classes.icon}>+</span>
                        <span className={classes.add}>
                            Add
                        </span>   
                    </button>
              </form>
    );
  };
  
export default MealInputForm;