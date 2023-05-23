import { createBrowserRouter, defer } from "react-router-dom";
import Main from "../layout/Main/Main";
import NotFound from "../Components/NotFound/NotFound";
import Explore from "../Components/Explore/Explore/Explore";
import Login from "../Components/Authentication/Login/Login";
import Register from "../Components/Authentication/Register/Register";
import DashboardHome from "../Components/Dashboard/DashboardHome/DashboardHome";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Pay from "../Components/Dashboard/User/Pay/Pay";
import Dashboard from "../Components/Dashboard/Dashboard/Dashboard";
import Home from "../pages/Home/Home";

// export const getReviews = async () => {
//   const response = await fetch(`http://localhost:4000/reviews`);
//   return await response.json();
// };

// export const getProducts = async () => {
//   const response = await fetch(`http://localhost:4000/products`);
//   return await response.json();
// };

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <NotFound />,
    children: [
      {
        path: "/",
        loader: async () => {
          // return fetch("http://localhost:4000/products/limit?number=4");
          return fetch("fakeData.json");
        },
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
