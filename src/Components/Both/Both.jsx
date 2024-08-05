import { Outlet } from "react-router-dom";
import Header from "../Main/Header/Header";
import Footer from "../Main/Footer/Footer";

function Both(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Both;