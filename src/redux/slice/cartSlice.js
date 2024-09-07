import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";

const CartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItem:[],
        totalPrice:0
    },
    reducers:{
        addToCart: (state, action) => {
            const find = state.cartItem.findIndex((item) => item.id === action.payload.id);
      
            if (find >= 0) {
              state.cartItem[find].quantity += 1;
            } else {
              const newItem = { ...action.payload, quantity:1};
              state.cartItem.push(newItem);
            }
          },
          removeElement:(state, action)=>{
           const data =  state.cartItem.filter((ele)=>ele.id !== action.payload)
           state.cartItem = data
          },

          decressCart:(state, action)=>{
            const findIndex = state.cartItem.findIndex((item)=>item.id===action.payload.id)
            if (state.cartItem[findIndex].quantity>1) {
              state.cartItem[findIndex].quantity-=1
            }
          },
          incressCart:(state, action)=>{
            const findIndex = state.cartItem.findIndex((item)=>item.id===action.payload.id)
            if (state.cartItem[findIndex].quantity>=1) {
              state.cartItem[findIndex].quantity+=1
            }
          }, 
          // CartTotalPrice:(state,action)=>{
          //   state.cartItem.reduce((cartTotal, cartItem)=>{
          //     const {price, quantity} = cartItem
          //     const itemTotal = price*price;
          //     cartTotal.total+=itemTotal
          //   },{
          //     total:0,
          //     quantity:0
          //   })
          // }
    }

})

export const {addToCart, removeElement, decressCart, incressCart} = CartSlice.actions
export default CartSlice.reducer