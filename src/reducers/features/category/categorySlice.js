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
    },
    editCategory:(state,action)=>{
        const {_id}=action.payload
      
        const idx= state.findIndex(s=> s._id==_id);
      
        
        state[idx]={...action.payload};
     
        return state
    },
    decreaseCategoryCount:(state,action)=>{
        const {category,_id}=action.payload;
        const idx =state.findIndex(s=> s.title===category);
        state[idx].products.remove(_id);
        return state
    },
    deleteCategory:(state,action)=>{
      const id=action.payload
      console.log(id)
      return state.filter(s=> s._id != id )
    }

    
  },
})

export const { getCategories,addCategory,addCategoryCount,deleteCategory,decreaseCategoryCount,editCategory } = categorySlice.actions

export default categorySlice.reducer