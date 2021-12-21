import classes from './AvailableMeals.module.css'
import MealItem from "./MealItem";


const AvailableMeals = () => {

    const DUMMY_MEALS = [
        {id: 1,
        name: "Burger1",
        description: 'Finest Burger on the ends',
        price: 22.99
        },
        {id: 2,
        name: "Burger2",
        description: 'Best Burger on the ends',
        price: 22.99
        },
        {id: 3,
        name: "Burger3",
        description: 'Smash Burger on the ends',
        price: 22.99
        },
        {id: 4,
        name: "Burger4",
        description: 'Big Burger on the ends',
        price: 22.99
        }
    ];

     //const mealList = DUMMY_MEALS.map(meal => <MealItem>{meal.name}</MealItem>);
     //const mealList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);


    return (
      <section className="">
          <ul>
            {DUMMY_MEALS.map(meal => <MealItem name={meal.name} id={meal.id} desc={meal.description} price={meal.price}></MealItem>)}
          </ul>
      </section>)
  };


export default AvailableMeals;