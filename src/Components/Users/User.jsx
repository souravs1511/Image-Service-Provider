
// import Create from "../Video list/Create";
// import Header from "../Main/Header/Header";

import { useSelector } from "react-redux";
import Header from "../Main/Header/Header";
import Create from "../Video list/Create";
import { useEffect, useState } from "react";


function User() {
    const ImageData = useSelector(state => state.RegisterUser.RegisterUsers);
    const [id, setId] = useState('');


    useEffect(() => {
        const data = localStorage.getItem("userLoginData");
        const userId = JSON.parse(data);
        
        setId(userId?.id);
        const findId = ImageData.find(data => data.id === userId?.id);
        if (findId) {
            // setPostData(findId.Post);
        }
    }, [ImageData]);

    // console.log("user<<<<<<",postData);
    console.log("iddddddddddddddddd",id);
   
    
  

    return (
        <>
        create image and add image here in this components
      <Header/>
        <Create/>
        <h1 className="justify-center text-2xl  font-bold flex gap-5 h-[500px] "> Welcome </h1> 
        </>


    )
}  

export default User;