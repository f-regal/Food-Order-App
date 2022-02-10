import classes from './AvailableMeals.module.css'
import MealItem from "./MealItem";



const AvailableMeals = (props) => {

    const DUMMY_MEALS = [
        {id: 1,
        name: "Beef",
        description: 'Honest beef, red onion relish and lettuce with homemade rosemary salted chips',
        price: 21.99
        },
        {id: 2,
        name: "Honest",
        description: 'Honest beef, red onion relish, smoked bacon, cheddar, lettuce and pickles with homemade rosemary salted chips',
        price: 22.99
        },
        {id: 3,
        name: "Tribute",
        description: "Honest beef, bacon, American cheese, burger sauce, French's mustard, pickles, onion and lettuce with homemade rosemary salted chips ",
        price: 23.99
        },
        {id: 4,
        name: "Chilli",
        description: 'Honest beef, bacon, chilli cheese, Honest hot sauce, shoestring fries, red onion, lettuce and pickled red jalapenos with chips ',
        price: 24.99
        }
    ];


    return (
      <div className={classes.mealListSection}>
        <ul>
          {DUMMY_MEALS.map(meal => <MealItem name={meal.name} key={meal.id} id={meal.id} desc={meal.description} price={meal.price} ></MealItem>)}
        </ul>
      </div>)
  };


export default AvailableMeals;