import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import routes from "./routes/routes";
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={routes} />

      {/* <BrowserRouter>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="dashboard" element={<DashboardHome />} />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="pay" element={<Pay />} />
            <Route path="review" element={<Review />} />
            <Route path="manageOrders" element={<ManageOrders />} />
            <Route path="manageProducts" element={<ManageProducts />} />
            <Route path="makeAdmin" element={<MakeAdmin />} />
            <Route path="addAProduct" element={<AddAProduct />} />
             <Route
              path="addAProduct"
              element={
                <AdminRoute>
                  <AddAProduct />
                </AdminRoute>
              }
            /> 
          </Route>
          <Route
            path="/placeOrder/:id"
            element={
              <PrivateRoute>
                <PlaceOrder />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter> */}
    </AuthProvider>
  );
};

export default App;
