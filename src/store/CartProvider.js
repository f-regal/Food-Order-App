import CartContext from "./cart-context";
import React, {useReducer} from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

// if (action.type === 'ADD') {
//     if (state.items.includes(action.item)) {
//         let updatesItems = 1;
//         let updatedTotalAmount = 2;
//     } else {
//         updatedItems = state.items.concat(action.item);
//         updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
//     }
    
//     return {
//         items: updatedItems,
//         totalAmount: updatedTotalAmount
//     }

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
            const updatedItems = state.items.concat(action.item);
            const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    } 
    return defaultCartState;
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemsToCart = (item) => {
        dispatchCartAction({type:'ADD', item: item});
    }

    const removeItemsFromCart = (id) => {
        dispatchCartAction({type:'REMOVE', id: id});
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
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