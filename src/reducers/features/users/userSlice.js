import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:"users",
    initialState:[

    ],
    reducers:{
        setUsers:(state,action)=>{
            return state=[...action.payload]
        },
    }
})

export const {setUsers}=userSlice.actions

export default userSlice.reducer
