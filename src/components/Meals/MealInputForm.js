
import classes from './MealInputForm.module.css'

const MealInputForm = (props) => {
    return (
              <form>
                    <label for="amount"><strong>Amount</strong></label>
                    <input className={classes.amount} type="number" id="fname" name="fname"></input><br></br>
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