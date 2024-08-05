/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Adduser } from "../Feature/Register";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Main/Header/Header";

const NewUser = () => {
  const ImageData = useSelector((state) => state.RegisterUser.RegisterUsers);
  console.log("reeeeeeee", ImageData);

  const dispatch = useDispatch();
  const navi = useNavigate();

  // For add New User for Register

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const finduserEmail = ImageData.find((email) => email.Email === data.Email);
    if (finduserEmail) {
      alert("email is already exist");
    } else {
      console.log("rdatta", data);
      dispatch(Adduser(data));
      reset();
      navi("/LogIn");
      toast.success("Registration Is Completed !", {
        position: "top-right",
      });
    }
  };

  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center w-full h-[100vh] px-5+">
          <div className=" flex flex-col items-end justify-start  overflow-hidden mb-2 xl:max-w-3xl w-full">
            <div className="flex">
              <h3 className="text-black">Dark Mode : &nbsp;</h3>
              <label className="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={darkMode}
                  readOnly
                />
                <div
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                  className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                ></div>
              </label>
            </div>
          </div>
          <div
            className={`xl:max-w-3xl ${
              darkMode ? "bg-black" : "bg-white"
            }  w-full p-5 sm:p-10 rounded-md`}
          >
            <h1
              className={`text-center text-xl sm:text-3xl font-semibold ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Register for a free account
            </h1>
            <div className="w-full mt-8">
              <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
                <input
                  {...register("username")}
                  className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
                    darkMode
                      ? "bg-[#302E30] text-white focus:border-white"
                      : "bg-gray-100 text-black focus:border-black"
                  }`}
                  type="text"
                  placeholder="Enter Your User Name"
                  required
                />
                <input
                  {...register("Email")}
                  className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
                    darkMode
                      ? "bg-[#302E30] text-white focus:border-white"
                      : "bg-gray-100 text-black focus:border-black"
                  }`}
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                {errors.Email && (
                  <p className="text-red-500 text-sm">{errors.Email.message}</p>
                )}

                <input
                  {...register("Password")}
                  className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
                    darkMode
                      ? "bg-[#302E30] text-white focus:border-white"
                      : "bg-gray-100 text-black focus:border-black"
                  }`}
                  type="password"
                  placeholder="Password"
                  required
                />
                <button className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>

                  <span className="ml-3">Register</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Already have an account?{" "}
                  <Link to="/LogIn">
                    <span className="text-[#E9522C] font-semibold">Login</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default NewUser;
