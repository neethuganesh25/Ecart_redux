import { createSlice } from "@reduxjs/toolkit";



export const wishlistSlice = createSlice({
    name:'wishlistSlice',
    initialState:[],
    reducers:{

        //1) add to wishlist 

        addTowishList :(state,actions)=>{
            state.push(actions.payload)
        },

        //2remove from wishlist

        removeFromwishList:(state,actions) =>{

        return    state.filter((item)=>item.id!=actions.payload)
        }
    }
})
export const {addTowishList,removeFromwishList}=wishlistSlice.actions

export default  wishlistSlice.reducer