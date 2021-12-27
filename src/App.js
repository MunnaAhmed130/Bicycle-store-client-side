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
import NotFound from './Components/NotFound/NotFound';
import MakeAdmin from './Components/Dashboard/Admin/MakeAdmin/MakeAdmin';
import ManageProducts from './Components/Dashboard/Admin/ManageProducts/ManageProducts';
import Pay from './Components/Dashboard/User/Pay/Pay';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route path="dashboard" element={<DashboardHome />} />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="pay" element={<Pay />} />
            <Route path="review" element={<Review />} />
            <Route path="manageOrders" element={<ManageOrders />} />
            <Route path="manageProducts" element={<ManageProducts />} />
            <Route path="makeAdmin" element={<MakeAdmin />} />
            <Route path="addAProduct" element={<AddAProduct />} />
            {/* <Route path="addAProduct" element={<AdminRoute><AddAProduct /></AdminRoute>} /> */}

          </Route>
          <Route path="/placeOrder/:id" element={<PrivateRoute><PlaceOrder /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

