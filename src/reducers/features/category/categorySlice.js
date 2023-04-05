import { createSlice } from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid'
import img from '../../../assets/img'

export const categorySlice = createSlice({
  name: 'category',
  initialState: [
    {
        title:"Example",
        image:img,
        background:"#00aa95",
        color:"#FFF",
        products:[],
        _id:uuidv4()
    }
  ]
    
  ,
  reducers: {
    getCategories:(state,action)=>{
        return state=[...action.payload]
    },
    addCategory:(state,action)=>{  
     return state=[...state,action.payload]    
    },
    addCategoryCount:(state,action)=>{
      const {title,_id}=action.payload;
      const idx =state.findIndex(s=> s.title===title);
      state[idx].products.push(_id);
      return state
    }
    
  },
})

export const { getCategories,addCategory,addCategoryCount } = categorySlice.actions

export default categorySlice.reducer