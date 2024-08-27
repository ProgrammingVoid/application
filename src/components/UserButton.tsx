/**
 * Project Name: PlantKeeper
 *
 * @created 26-08-2024
 * @file UserButton.tsx
 * @version 1.0.0
 * @see https://github.com/Plant-keeper
 *
 * @authors
 *   - Rafael Dousse
 *   - Eva Ray
 *   - Quentin Surdez
 *   - Rachel Tranchida
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const UserButton = () => {
    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate('/dashboard');
    };

    return (
        <button onClick={handleUserClick} className="cursor-pointer">
            <FaUserCircle size={24} className="text-green-900"/>
        </button>
    );
}

export default UserButton;