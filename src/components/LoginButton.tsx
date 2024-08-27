/**
 * Project Name: PlantKeeper
 *
 * @created 26-08-2024
 * @file LoginButton.tsx
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
import RoundedButton from "./RoundedButton";

const LoginButton = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <RoundedButton
            text="Login"
            textColor="text-gray-50"
            bgColor="bg-green-900"
            onClick={handleLoginClick}
        />
    );
}

export default LoginButton;



