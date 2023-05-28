import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        total: 0
    },
    reducers: {
        add(state, action) {
            const updatedCartList = [...state.cartList, action.payload]
            let totalPrice = 0
            
            updatedCartList.forEach(product => {
                totalPrice += product.price
            })

            return {
                    ...state, 
                    cartList: updatedCartList,
                    total: totalPrice 
                }
        },
        remove(state, action) {
            const updatedCartList = state.cartList.filter(productCartList => action.payload.id !== productCartList.id)
            let totalPrice = 0

            updatedCartList.forEach(product => {
                totalPrice += product.price
            })

            return {...state, cartList: updatedCartList, total: totalPrice}
        }
    }
})

export const cartReducer = cartSlice.reducer
export const { add, remove } = cartSlice.actions 