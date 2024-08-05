/* eslint-disable no-unreachable */
/* eslint-disable react-refresh/only-export-components */
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../../Main/Header/Header";
import { toast } from "react-toastify";
import { Admin } from "../../Admin/Admin";




function LOG() {
    const Navigate = useNavigate();
    const { register, handleSubmit, } = useForm();
    
    const onSubmit = (data) => {
        console.log("data>>>>>>>>>>>>", data);
        const getUserData = JSON.parse(localStorage.getItem("registeruser"))
        console.log("get user data", getUserData)
        const findData = getUserData?.find((udata) => {
            return udata?.username === data.username && udata.Email === data.Email && udata.Password === data.Password
        })
        
       
        const findadmin=Admin.find((adata)=>{
            return adata.username===data.username && adata.Email===data.Email && adata.Password===data.Password
        })
        console.log("dddd",findadmin);
        
        if (findData) {
            localStorage.setItem('userLoginData', JSON.stringify(findData))
            toast.success("Login Is Completed !", {
                position: "top-right"
              });
            return Navigate(`/USERPAGE`)
        } else if (findadmin){
            localStorage.setItem("Admin", JSON.stringify(findadmin));
            console.log("hiiii");
            return Navigate("/AdminPage");
            toast.success("Welcome Admin!", {
                position: "top-right"
              });
           
        }
         else {
            toast.error("User Is Not Found!", {
                position: "top-right"
              });
           
        }
    }

    return (
        <>
        <Header/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
                    <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
                        <div
                            className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
                            style={{
                                backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
                            }}
                        ></div>
                        <div className="w-full p-8 lg:w-1/2">
                            <p className="text-xl text-gray-900 text-center font-semibold">Welcome back!</p>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"

                                    {...register("username")}

                                />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                    {...register("Email",)}


                                />
                            </div>
                            <div className="mt-4 flex flex-col justify-between">
                                <div className="flex justify-between">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Password
                                    </label>
                                </div>
                                <input
                                    type="Password"
                                    className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                    {...register("Password",)}

                                />
                                <NavLink
                                    href="#"
                                    className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
                                >
                                    Forget Password?
                                </NavLink>
                            </div>
                            <div className="mt-8">
                                <button type="submit" className="bg-[#E9522C] text-white font-bold py-2 px-4 w-full rounded hover:bg-[#ec7155]">
                                    Login
                                </button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default LOG;