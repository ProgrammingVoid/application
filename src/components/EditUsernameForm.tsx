import React, { useState, useEffect } from "react";
import { API_URL, USER_ME_URL } from "../constants";
import axios from "axios";
import Cookies from "js-cookie";

const EditButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#205712] hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            Edit
        </button>
    );
};

const EditUsernameForm: React.FC = () => {
    const [username, setUsername] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${API_URL}${USER_ME_URL}`, {
            headers: { Authorization: `Bearer ${Cookies.get('token')}` }
        })
            .then(response => {
                setUsername(response.data.username);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                setLoading(false);
            });
    }, []);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        axios.patch(`${API_URL}${USER_ME_URL}`, { username: username }, {
            headers: { Authorization: `Bearer ${Cookies.get('token')}` }
        })
            .then(() => setIsEditing(false))
            .catch(error => console.error('Error updating username:', error));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-white p-2 border border-gray-300 rounded">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-lg font-semibold text-gray-400">Username</label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#205712] focus:border-[#205712] text-xl sm:text-lg font-medium text-gray-700"
                            readOnly={!isEditing}
                        />
                </div>
                {!isEditing ? (
                    <EditButton onClick={handleEditClick} />
                ) : (
                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#205712] hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Save
                    </button>
                )}
            </form>
        </div>
    );
};

export default EditUsernameForm;