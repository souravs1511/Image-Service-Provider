// import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import AdminAside from "./AD_post/AdminAside";
// import { useEffect, useState } from "react";
// import img from  '../../assets/frenzi-high-resolution-logo.png'

export default function AdminPage() {
  // const [AdminName,SetAdmiName]=useState(null);
  // useEffect(()=>{
  // const AdminData = JSON.parse(localStorage.getItem("Admin"));
  // SetAdmiName(AdminData)
 
  // },[])
  return (
    <>
   
      {/* {AdminName?.map((data)=>{
        console.log("???????????",data)
        return(
        <div key={data.id} className="text-black text-center text-3xl">
          <h1>Welcome {data.username}</h1>


        </div>
        )
      })} */}
      <AdminAside />
      <Outlet/>
 

    </>
  );
}
