import React from 'react';
import './App.css';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import AddSensor from "./pages/AddSensor";
import AddPlant from "./pages/AddPlant";
import Info from "./pages/Info";

function App(){
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
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
  ]);
  return (
      <div className="App">
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </div>
  );
}

export default App;
