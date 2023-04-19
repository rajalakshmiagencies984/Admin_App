import { createSlice } from '@reduxjs/toolkit'


export const alertSlice = createSlice({
  name: 'alert',
  initialState: [
    
  ] ,
  reducers: {
    addAlert:(state,action)=>{
        let alert = action.payload
        return state=[...state,alert]
    },
    deleteAlert:(state,action)=>{
      const id=action.payload
   
      state=state.filter(s=> s._id !=id);
      
      return state

    }
  
  },
})

export const { addAlert,deleteAlert} = alertSlice.actions

export default alertSlice.reducer