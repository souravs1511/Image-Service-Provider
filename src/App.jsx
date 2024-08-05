import { useEffect } from "react";
import CustomRoutes from "./routes/CustomRoutes";
import { useDispatch } from "react-redux";
import { setUserLoginData } from "./Components/Feature/Register";
import {  ToastContainer } from 'react-toastify';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = localStorage.getItem('userLoginData');
    if (data) {
      dispatch(setUserLoginData(JSON.parse(data)));
    }
    console.log(JSON.parse(data));
  }, [])

  return (
    <>
      <div>
        <CustomRoutes />
        <ToastContainer/>
      </div>
    </>
  );
}

export default App;
