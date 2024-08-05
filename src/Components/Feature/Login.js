/* eslint-disable react-hooks/rules-of-hooks */
import { createSlice, nanoid } from "@reduxjs/toolkit";

const LogINSlice = createSlice({
    name: "Login",
    initialState: "",
    reducers: {
        VailidUser: (state, action) => {
            const Data = {
                id: nanoid(),
                username: action.payload.username,
                Email: action.payload.Email,
                Password: action.payload.Password,
                
                // navigate:action.payload.navigate,
            };
            console.log(Data);
          
        }
    }
});

export const {VailidUser}=LogINSlice.actions;
export default LogINSlice.reducer;


    

