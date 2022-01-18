import classes from './AvailableMeals.module.css'
import MealItem from "./MealItem";
import { useState } from 'react';


const AvailableMeals = (props) => {

    const DUMMY_MEALS = [
        {id: 1,
        name: "Burger1",
        description: 'Finest Burger on the ends',
        price: 21.99
        },
        {id: 2,
        name: "Burger2",
        description: 'Best Burger on the ends',
        price: 22.99
        },
        {id: 3,
        name: "Burger3",
        description: 'Smash Burger on the ends',
        price: 23.99
        },
        {id: 4,
        name: "Burger4",
        description: 'Big Burger on the ends',
        price: 24.99
        }
    ];

    const [EnteredAmount, setEnteredAmount] = useState('')
    const AmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        
    }

    const AmoundSubmitHandler = (event) => {
        event.preventDefault();
        console.log(EnteredAmount);
        //console.log(key);
    }

    // const MealIdentifier = () => {
    //   console.log()
    // }


    return (
      <div className={classes.mealListSection}>
        <ul>
          {DUMMY_MEALS.map(meal => <MealItem name={meal.name} key={meal.id} id={meal.id} desc={meal.description} price={meal.price} onAmountChange={AmountChangeHandler} onAmountSubmit={AmoundSubmitHandler}  ></MealItem>)}
        </ul>
      </div>)
  };


export default AvailableMeals;