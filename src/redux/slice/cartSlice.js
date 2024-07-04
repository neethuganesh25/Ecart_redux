import { createSlice } from "@reduxjs/toolkit";



export const cartSlice = createSlice({
    name:'cartSlice',
    initialState:[],
    reducers:{

        // add to cart
        addTocart :(state,actions)=>{
            state.push(actions.payload)
        },


        // remove from cart

        removeFromcart : (state,actions) =>{

            return    state.filter((item)=>item.id!=actions.payload)
            },
            emptyCart : (state)=>{
                return state =[]
            }
    }
})
export const {addTocart,removeFromcart, emptyCart} = cartSlice.actions

export default cartSlice.reducer