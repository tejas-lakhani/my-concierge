import { styled } from "@mui/material";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import DrawerBox from "../../components/drawer/Index";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const MainLayout = () => {
  const { pathname } = useLocation();
  const token = localStorage.getItem("token"); // Get token from localStorage

  // If token exists and user is on the root path, redirect to /category
  if (token && pathname === "/") {
    return <Navigate to={"/category"} />;
  }

  // If no token exists, redirect to /login regardless of the path
  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return (
    <DrawerBox>
      <DrawerHeader />
      <Outlet />
    </DrawerBox>
  );
};

export default MainLayout;
