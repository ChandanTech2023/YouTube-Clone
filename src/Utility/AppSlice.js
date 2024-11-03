import { createSlice } from "@reduxjs/toolkit";
const AppSlice = createSlice({
    name:"app",
    initialState:{
        open:true,

    },
    reducers:{
        //Set Actions
        toggleSidebar:(state)=>{
            state.open=!state.open;
        }
        
    }
})
export const {toggleSidebar} =AppSlice.actions;
export default AppSlice.reducer;