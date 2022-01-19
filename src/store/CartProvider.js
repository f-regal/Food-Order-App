import CartContext from "./cart-context";
import React from "react";

const CartProvider = (props) => {

    const addItemsToCart = (item) => {}

    const removeItemsFromCart = (id) => {}

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItems: addItemsToCart,
        removeItems: removeItemsFromCart,
    }
    return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    )

} 
export default CartProvider;