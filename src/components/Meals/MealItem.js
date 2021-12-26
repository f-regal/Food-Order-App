import { Fragment } from "react";
import classes from './MealItem.module.css'




const MealItem = (props) => {
    return (
      <Fragment>
<li className={classes.meal}>
  <div>
    <h3>{props.name}</h3>
    <div className={classes.description}>{props.desc}</div>
    <div className={classes.price}>{props.price}</div>
  </div>
  <div>

  </div>
</li>
      </Fragment>
    );
  };
  
export default MealItem;