import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import Main from "../layout/Main/Main";
import NotFound from "../Components/NotFound/NotFound";
import Explore from "../Components/Explore/Explore/Explore";
import Login from "../Components/Authentication/Login/Login";
import Register from "../Components/Authentication/Register/Register";
import DashboardHome from "../Components/Dashboard/DashboardHome/DashboardHome";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Pay from "../Components/Dashboard/User/Pay/Pay";
import Dashboard from "../Components/Dashboard/Dashboard/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/pay",
        element: <Pay />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default routes;
