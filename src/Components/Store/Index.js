import { configureStore } from '@reduxjs/toolkit'
// import  from '../Feature/Register';
import Login from '../Feature/Login';
import Register from '../Feature/Register';
// import  uservideos  from '../Feature/AddVideo';

const Store = configureStore({
    reducer: {
        RegisterUser: Register,
        LoginUser: Login,
        // userVideSlice: uservideos
    }



})
export default Store;