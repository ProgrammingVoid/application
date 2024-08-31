/**
 * Project Name: PlantKeeper
 *
 * @created 31/08/2024
 * @file index.tsx
 * @version 1.0.0
 * @see https://github.com/Plant-keeper
 *
 * @authors
 *   - Rafael Dousse
 *   - Eva Ray
 *   - Quentin Surdez
 *   - Rachel Tranchida
 */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Home from "../pages/Home";
import React from "react";
import SignUp from "../pages/SignUp";
import Plants from "../pages/Plants";
import AddSensor from "../pages/AddSensor";
import AddPlant from "../pages/AddPlant";
import Info from "../pages/Info";
import Login from "../pages/Login";
import Logout from "../pages/Logout";

const Routes = () => {
    const { token } = useAuth();

    // Define public routes accessible to all users
    const routesForPublic = [
        {
            path: '/',
            element: <Home />,
        },
    ];

    // Define routes accessible only to authenticated users
    const routesForAuthenticatedOnly = [
        {
            path: "/",
            element: <ProtectedRoute />,
            children: [
                {
                    path: '/plants',
                    element: <Plants />,
                },
                {
                    path: '/addsensor',
                    element: <AddSensor />,
                },
                {
                    path: '/addplant',
                    element: <AddPlant />,
                },
                {
                    path: '/info',
                    element: <Info />,
                },
                {
                    path: '/logout',
                    element: <Logout />,
                }
            ],
        },
    ];

    // Define routes accessible only to non-authenticated users
    const routesForNotAuthenticatedOnly = [
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/signup',
            element: <SignUp />,
        },
    ];

    // Combine and conditionally include routes based on authentication status
    const router = createBrowserRouter([
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
    ]);

    // Provide the router configuration using RouterProvider
    return <RouterProvider router={router} />;
};

export default Routes;
