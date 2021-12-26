import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, loading } = useAuth();
    let location = useLocation();
    if (loading) {
        return <CircularProgress></CircularProgress>
    }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />

};

export default AdminRoute;