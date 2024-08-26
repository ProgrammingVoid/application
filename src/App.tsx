import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
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
      path: '/signin',
      element: <SignIn />,
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
