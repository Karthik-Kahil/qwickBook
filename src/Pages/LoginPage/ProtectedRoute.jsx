import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  let auth = localStorage.getItem("userData");
  const authData = JSON.parse(auth);

  return authData?.name ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
