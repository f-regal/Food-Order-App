import CartContext from "./cart-context";
import React, {useReducer} from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
            const updatedTotalAmount = 
                state.totalAmount + (action.item.price * action.item.amount);

            //check if item is already part of cart
            const existingItemCartIndex = 
                state.items.findIndex((item) => item.id === action.item.id);

            const existingCartItem = 
                state.items[existingItemCartIndex];

            let updatedItems;
            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount,
                }

                updatedItems = [...state.items];
                updatedItems[existingItemCartIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.item);
            }
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