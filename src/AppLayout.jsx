import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function AppLayout() {
  const { show } = useSelector((sel) => sel.loginShowSlice);

  return (
    <>
      <div>
        <NavBar />
        <Toaster position="top-center" reverseOrder={false} />
        <Outlet />
        {show && <LoginPage />}
      </div>
    </>
  );
}

export default AppLayout;
