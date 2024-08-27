/**
 * Project Name: PlantKeeper
 *
 * @created 26-08-2024
 * @file RoundedButton.tsx
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

interface ButtonProps {
    text: string;
    textColor: string;
    bgColor: string;
    onClick: () => void;
}

const RoundedButton: React.FC<ButtonProps> = ({ text, textColor, bgColor, onClick }) => {
    return (
        <button
            className={`btn px-2 -inline-block rounded-lg text-center border border-black ${textColor} ${bgColor}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default RoundedButton;