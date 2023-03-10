import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Navigate
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
// import CustomerPage from './pages/CustomerPage';
// import SchedulePage from './pages/SchedulePage';

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
