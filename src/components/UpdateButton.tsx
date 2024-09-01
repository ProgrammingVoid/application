/**
 * Project Name: PlantKeeper
 *
 * @created 01-09-2024
 * @file DeleteButton.tsx
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
import { RiEditLine } from "react-icons/ri";

interface UpdateButtonProps {
    handleUpdate: () => void;
}

/**
 * Button to trigger the update function
 * @param handleUpdate - The function to call when the button is clicked
 */
export const UpdateButton: React.FC<UpdateButtonProps> = ({ handleUpdate }) => {
    const handleClick = () => {
        handleUpdate();
    };

    return (
        <button onClick={handleClick} className="text-gray-500">
            <RiEditLine />
        </button>
    );
};