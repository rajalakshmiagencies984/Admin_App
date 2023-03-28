import { createSlice } from '@reduxjs/toolkit'
import * as api from '../api'
import img from '../assets/img'

export const categorySlice = createSlice({
  name: 'category',
  initialState: [
    {
        title:"Example",
        image:img,
        background:"#00aa95",
        color:"#FFF"
    }
  ]
    
  ,
  reducers: {
    getAllCategories:(state)=>{
        const {data} = api.getAllCategories();
        state=[...data]

    },
    addNewCategory:(state,action)=>{  
      
    
      const  {data}=api.addNewCategory(action.payload);
      // state=[...state,data]
    
    }
    
  },
})

export const { getAllCategories,addNewCategory } = categorySlice.actions

export default categorySlice.reducer