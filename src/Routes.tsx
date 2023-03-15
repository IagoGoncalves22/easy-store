import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
    Navigate
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="login" replace={true} />
    },
    {
        path: '/login',
        element: <LoginPage />
    }
]);

const Routes = () => {
    return <RouterProvider router={router} />;
};

export default Routes;
