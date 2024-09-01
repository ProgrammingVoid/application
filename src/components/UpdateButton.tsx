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
import { useNavigate } from "react-router-dom";

interface UpdateButtonProps {
    route: string;
}

/**
 * Button to navigate to the update page
 * @param route - The update route to navigate to, e.g. "/updateplant"
 */
export const UpdateButton: React.FC<UpdateButtonProps> = ({ route }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route);
    };

    return (
        <button onClick={handleClick} className="text-gray-500">
            <RiEditLine />
        </button>
    );
};