import { Route, Routes } from "react-router-dom";
import NewUser from "../Components/Register/NewUser";
import LOG from "../Components/LogIn/LOGIN/LOG";
import HomePage from "../Components/Main/Home/Home";
import USERPOST from "../Components/USER POST/USERPOST";
import Create from "../Components/Video list/Create";
import AD_userlist from "../Components/Admin/AD_post/AD_userlist";
import AD_userPost from "../Components/Admin/AD_post/AD_userPost";
import AdminPage from "../Components/Admin/AdminPage";

export default function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/USERPAGE" element={<Create />} />
      <Route path="/NewUser" element={<NewUser />} />
      <Route path="/LogIn" element={<LOG />} />
      <Route path="/POST" element={<USERPOST />} />

      <Route path="/AdminPage" element={<AdminPage />}>
        <Route path="Admin_userlist" element={<AD_userlist />} />
        <Route path="Admin_userPost" element={<AD_userPost />} />
      </Route>
    </Routes>
  );
}
