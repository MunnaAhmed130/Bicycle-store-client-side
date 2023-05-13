import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import Main from "../layout/Main/Main";
import NotFound from "../Components/NotFound/NotFound";
import Explore from "../Components/Explore/Explore/Explore";
import Login from "../Components/Authentication/Login/Login";
import Register from "../Components/Authentication/Register/Register";
import Dashboard from "../Components/Dashboard/Dashboard/Dashboard";
import DashboardHome from "../Components/Dashboard/DashboardHome/DashboardHome";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      // {
      //   path: "/explore",
      //   element: <Explore />,
      // },
      // {
      //   path: "/",
      //   element: <Home />,
      // },
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
