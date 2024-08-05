import {  NavLink, useNavigate } from "react-router-dom";
import { FaUser, FaSignOutAlt, FaUsers, FaUserEdit } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function AdminAside() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const aDdata = localStorage.getItem('Admin');
    if (aDdata) {
      setData(JSON.parse(aDdata));
    } else {
      navigate('/LogIn'); 
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('Admin');
    navigate('/LogIn');
  };

  return (
    <aside className="w-1/5 h-screen flex flex-col gap-5 rounded-md m-2 bg-[#1a1a1a] p-4">
      <div className="flex flex-col items-center gap-4">
        {data && (
          <NavLink
            to="/AdminPage"
            className="flex items-center gap-4 h-[60px] bg-[#225777] px-4 rounded-xl w-full justify-center"
          >
            <div className="flex items-center gap-2">
              <FaUser className="text-white text-2xl" />
              <div>
                <h1 className="lg:text-2xl font-semibold text-white">ADMIN</h1>
                <h2 className="lg:text-xl font-semibold text-white">{data.username}</h2>
              </div>
            </div>
          </NavLink>
        )}
        <div className="flex flex-col gap-4 w-full">
          {data && (
            <>
              <NavLink
                to="/AdminPage/Admin_userlist"
                className={({ isActive }) =>
                  `py-2 px-4 flex items-center justify-center gap-2 ${
                    isActive ? "bg-[#225777]" : "bg-black"
                  } text-slate-200 font-bold rounded transition-colors duration-200`
                }
              >
                <FaUsers />
                User List
              </NavLink>
              <NavLink
                to="/AdminPage/Admin_userPost"
                className={({ isActive }) =>
                  `py-2 px-4 flex items-center justify-center gap-2 ${
                    isActive ? "bg-[#225777]" : "bg-black"
                  } text-slate-200 font-bold rounded transition-colors duration-200`
                }
              >
                <FaUserEdit />
                User Post
              </NavLink>
            </>
          )}
        </div>
      </div>
      <button
        onClick={handleLogout}
        className="mt-auto text-white bg-[#225777] hover:bg-slate-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 transition-colors duration-200 focus:outline-none flex items-center justify-center gap-2"
      >
        <FaSignOutAlt />
        Log Out
      </button>
    </aside>
  );
}
