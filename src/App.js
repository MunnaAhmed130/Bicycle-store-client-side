import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register';
import Explore from './Components/Explore/Explore/Explore';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Components/Dashboard/DashboardHome/DashboardHome';
import Review from './Components/Dashboard/Review/Review';
import PlaceOrder from './Components/PlaceOrders/PlaceOrder/PlaceOrder';
import AuthProvider from './Context/AuthProvider';
import MyOrders from './Components/Dashboard/User/MyOrders/MyOrders';
import ManageOrders from './Components/Dashboard/Admin/ManageAllOrders/ManageOrders';
import AddAProduct from './Components/Dashboard/Admin/AddAProduct/AddAProduct';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AdminRoute from './Components/AdminRoute/AdminRoute';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route path="dashboardHome" element={<DashboardHome />} />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="addAProduct" element={<AddAProduct />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="/dashboard" element={<AdminRoute><Dashboard /></AdminRoute>}>
            <Route path="dashboardHome" element={<DashboardHome />} />
            <Route path="manageOrders" element={<ManageOrders />} />
            <Route path="addAProduct" element={<AddAProduct />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="/placeOrder/:id" element={<PrivateRoute><PlaceOrder /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

