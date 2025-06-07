import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    
    const storedValue = sessionStorage.getItem('user');
    const user = storedValue ? JSON.parse(storedValue) : null;

    if (!user) {
        return <Navigate to="/" />;
    }

    return children;
}

export default ProtectedRoute;