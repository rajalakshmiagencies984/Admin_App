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
        },
        deleteProduct:(state,action)=>{
            const id=action.payload
            return state.filter(s=> s._id!==id);
        },
        editProduct:(state,action)=>{
             const {_id}=action.payload;
             const idx= state.findIndex(s=> s._id==_id)
             state[idx]={...action.payload}
             return state
        }
    }
})

export const {getProducts,addProduct,deleteProduct,editProduct}=productSlice.actions
export default productSlice.reducer