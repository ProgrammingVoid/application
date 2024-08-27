import React, { useEffect } from 'react';
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

function App() {
  // Dynamically add the font link when the component mounts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.cdnfonts.com/css/jsmath-cmti10';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

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
