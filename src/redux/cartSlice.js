import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items : []
    },
    reducers: {
        addItem : (state,action) => {
            // mutating the state - directly modifying the state
            state.items.push(action.payload);
        },
        removeItem : (state,action) => {
            // todo:  delete the selected item
            state.items.pop();
            
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;

/*
the cartslice has the following structure
 {
actions : {
addItem,
removeItem,
clearCart
},
reducer : {
        addItem : (state,action) => {
            state.items.push(action.payload);
        },
        removeItem : (state,action) => {
            // todo:  delete the selected item
            state.items.pop();
            
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
}
*/