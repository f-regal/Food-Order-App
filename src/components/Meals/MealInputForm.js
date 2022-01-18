
import classes from './MealInputForm.module.css'
//import {useState} from 'react';

const MealInputForm = (props) => {

    // const [EnteredAmount, setEnteredAmount] = useState('')
    // const AmountChangeHandler = (event) => {
    //     setEnteredAmount(event.target.value);
        
    // }

    // const AmoundSubmitHandler = (event) => {
    //     event.preventDefault();
    //     console.log(EnteredAmount);
    // }


    return (
              <form>
                    <label><strong>Amount</strong></label>
                    <input className={classes.amount} type="number" id={props.id} name="amount" onChange={props.onAmountChange}></input><br></br>
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