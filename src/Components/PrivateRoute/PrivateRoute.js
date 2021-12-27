import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import useAuth from '../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        // return <CircularProgress></CircularProgress>;
        return <Spinner></Spinner>
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />
};

export default PrivateRoute;