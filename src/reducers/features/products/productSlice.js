import { createSlice } from "@reduxjs/toolkit";
import img from '../../../assets/img'


export const productSlice = createSlice({
    name:"product",
    initialState:[
        {
            name:"Example",
            image:img,
            mrp:0,
            stock:0,
            category:"fertilizer",
            gst:0,
            sold:0,
            chemicals:[
                {
                    name:"c1",
                    percentage:1
                }
            ],
            products:[
                {
                    name:"None"
                }
            ],
            effects:[
                {
                    point:"none"
                }
            ]
        }
    ],

    reducers:{
        getProducts: (state,action)=>{
            return state=[...action.payload]
        },
        addProduct:(state,action)=>{
            return state=[...state,action.payload]
        }
    }
})

export const {getProducts,addProduct}=productSlice.actions
export default productSlice.reducer