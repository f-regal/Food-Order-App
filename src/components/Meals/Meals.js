import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";

const Meals = (props) => {
    return (
      <Fragment>
          <AvailableMeals CartItems = {props.onCartUpdate} />
      </Fragment>
    );
  };
  
export default Meals;