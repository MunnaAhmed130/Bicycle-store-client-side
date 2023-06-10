import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import NotFound from "../pages/NotFound/NotFound";
import Explore from "../pages/Explore/Explore";
import DashboardHome from "../Components/Dashboard/DashboardHome/DashboardHome";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Pay from "../Components/Dashboard/User/Pay/Pay";
import Dashboard from "../Components/Dashboard/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Auth from "../pages/Authentication/Auth";

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
          // return fetch("http://localhost:4000/products");
          return fetch("fakeData.json");
        },
        element: <Home />,
      },
      {
        path: "/explore",
        loader: async () => {
          return fetch("http://localhost:4000/products");
          // return fetch("fakeData.json");
        },
        element: <Explore />,
      },
      {
        path: "/login",
        element: <Auth />,
      },
      {
        path: "/register",
        element: <Auth />,
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
]);

export default routes;
