import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { Toaster } from "react-hot-toast";

function AppLayout() {
  return (
    <div>
      <NavBar />
      <Toaster position="top-center" reverseOrder={false} />
      <Outlet />
      <LoginPage />
    </div>
  );
}

export default AppLayout;
