import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const isAuth = localStorage.getItem('demo_auth');

    if (isAuth !== 'true') {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
