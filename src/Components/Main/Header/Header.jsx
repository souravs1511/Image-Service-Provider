import { useEffect, useState } from "react";
import { NavLink, Link, useParams, useNavigate } from "react-router-dom";
import img from '../../../assets/frenzi-high-resolution-logo.png'
export default function Header() {
              
  const [userData, setUserData] = useState(null);
  const { id } = useParams();
  const Navigate = useNavigate();
  console.log("idddddddddd", id);

  useEffect(() => {
    const data = localStorage.getItem('userLoginData');
    console.log(JSON.parse(data));
    setUserData(JSON.parse(data))
  }, []);

  const handleLogout = () => {
    Navigate('/LogIn')
    localStorage.removeItem('userLoginData');
  }

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src={img}
              className="logo mr-3 h-20 w-18 p-2 rounded-xl bg-gradient-to-r  shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <>
              {!userData && location.pathname === "/"&& (
                <Link
                  to="/NewUser"
                  className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Register Now
                </Link>
              )}
              { !userData && location.pathname == "/"&& (
                <Link
                  to="/LogIn"
                  className="text-white bg-[#225777] hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Log In
                </Link>
              )}

          {userData && (
          <div className="flex justify-end lg:order-2">
            <span className=" font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none text-pink-800">
             <p className="font-bold ">

              Welcome-: {userData.username}
             </p>
            </span>
          </div>
        )}
            </>

            {location.pathname === `/USERPAGE` && (
              <button
                onClick={() => handleLogout()}
                className="text-white bg-[#225777] hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Log Out
              </button>
            )}

             <div className=" font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ">
            <ul>
            {
                <li>
                  {userData && <NavLink
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200  ${
                        isActive ? "text-[#225777]" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#1B2638] lg:p-0`
                    }
                    to="/USERPAGE"
                  >
                    My Profile
                  </NavLink>}
                </li>
              }
            </ul>
          </div>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-[#225777]" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
             
              { 
                <li>
                    
                  {userData &&<NavLink
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200  ${
                        isActive ? "text-[#225777]" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#1B2638] lg:p-0`
                    }
                    to="/POST"
                  >
                    Post
                  </NavLink>}
                </li>
              }
            </ul>
          </div>
         
        </div>

      </nav>
    </header>
  );
}
