import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

    const NEW_MEALS = [
      {id: 1,
      name: "Burger1",
      price: 21.99
      },
      {id: 2,
      name: "Burger2",
      price: 22.99
      }
  ];

  
    return (
     <div className={classes.cart}>
       <ul>
          {NEW_MEALS.map(newmeal => <CartItem name={newmeal.name} id={newmeal.id} price={newmeal.price}></CartItem>)}
       </ul>
       <div className={classes.total}>
        <h3 className={classes.totalTitle}>Total</h3>
        <div className={classes.totalPrice}>$25</div>
       </div>
     </div>
    );
  };
  
export default Cart;