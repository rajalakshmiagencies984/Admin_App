import { createSlice } from "@reduxjs/toolkit";


export const adminSlice = createSlice({
    name:"admin",
    initialState:{
        name:"",
        email:"",
        phone:"",
        password:""
    },
    reducers:{
        setAdmin:(state,action)=>{
            return state={...action.payload}
        },
        removeAdmin:(state,action)=>{
            return state={name:"",
            email:"",
            phone:"",
            password:""}
        }
    }
})

export const {setAdmin,removeAdmin}=adminSlice.actions

export default adminSlice.reducer
