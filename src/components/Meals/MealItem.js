import { Fragment } from "react";
import classes from './MealItem.module.css'




const MealItem = (props) => {
    return (
      <Fragment>
          <div className={classes.expenseItem__description}>
                <h2>{props.name}</h2>
                <div className={classes.expenseItem__price}>{props.price}</div>
          </div>
      </Fragment>
    );
  };
  
export default MealItem;