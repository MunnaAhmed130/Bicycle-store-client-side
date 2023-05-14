import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, admin, loading } = useAuth();
  let location = useLocation();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user.email && admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
