import { Fragment } from "react";
import classes from './MealItem.module.css'
import MealInputForm from "./MealInputForm";

const MealItem = (props) => {

  const price = `$${props.price}`
    return (
      <Fragment>
          <li className={classes.meal}>
            <div>
              <h3>{props.name}</h3>
              <div className={classes.description}>{props.desc}</div>
              <div className={classes.price}>{price}</div>
            </div>

            <MealInputForm/>

          </li>
      </Fragment>
    );
  };
  
export default MealItem;