
import classes from './MealInputForm.module.css'

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
                    <label for="amount"><strong>Amount</strong></label>
                    <input className={classes.amount} type="number" id="amount" name="amount" onChange={props.onAmountChange}></input><br></br>
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