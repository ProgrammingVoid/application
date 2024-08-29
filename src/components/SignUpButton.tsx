/**
 * Project Name: PlantKeeper
 *
 * @created 26-08-2024
 * @file SignUpButton.tsx
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

const SignInButton = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/signup');
    };

    return (
        <RoundedButton
            text="Sign Up"
            textColor="text-[#205712]"
            bgColor="bg-gray-50"
            onClick={handleSignInClick}
        />
    );
}

export default SignInButton;