/**
 * Project Name: PlantKeeper
 *
 * @created 01-09-2024
 * @file ConfirmationDialog.tsx
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

interface ConfirmationDialogProps {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className="bg-white p-4 rounded">
                <p>{message}</p>
                <div className="flex justify-end mt-4">
                    <button onClick={onConfirm} className="bg-red-800 text-white px-4 py-2 rounded mr-2">
                        Yes
                    </button>
                    <button onClick={onCancel} className="bg-gray-300 px-4 py-2 rounded">
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationDialog;