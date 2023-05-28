import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        total: 0
    },
    reducer: {
        add() {
            
        },
        remove() {

        }
    }
})

export const cartReducer = cartSlice.reducer