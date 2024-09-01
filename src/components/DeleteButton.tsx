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
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import ConfirmationDialog from "./ConfirmationDialog";

interface DeleteButtonProps {
    endpoint: string;
}

/**
 * Button to delete an object
 * @param endpoint - The endpoint to send the delete request to
 */
export const DeleteButton: React.FC<DeleteButtonProps> = ({ endpoint }) => {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDelete = async () => {
        setShowConfirm(false);
        try {
            const response = await axios.delete(endpoint);
            console.log("Delete successful:", response.data);
            window.location.reload();
        } catch (error) {
            console.error("Error deleting:", error);
        }
    };

    return (
        <div>
            <button onClick={() => setShowConfirm(true)} className="text-gray-500">
                <RiDeleteBin6Line />
            </button>
            {showConfirm && (
                <ConfirmationDialog
                    message="Are you sure you want to delete this object?"
                    onConfirm={handleDelete}
                    onCancel={() => setShowConfirm(false)}
                />
            )}
        </div>
    );
};