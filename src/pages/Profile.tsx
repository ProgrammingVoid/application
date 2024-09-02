/**
 * Project Name: PlantKeeper
 *
 * @created 01-09-2024
 * @file Profile.tsx
 * @version 1.0.0
 * @see https://github.com/Plant-keeper
 *
 * @authors
 *   - Rafael Dousse
 *   - Eva Ray
 *   - Quentin Surdez
 *   - Rachel Tranchida
 */
// src/pages/Profile.tsx
import React, {useEffect, useState} from "react";
import AuthNavbar from "../components/AuthNavbar";
import EditUsernameForm from "../components/EditUsernameForm";
import {API_URL, USER_ME_URL} from "../constants";
import axios from "axios";
import Cookies from "js-cookie";

function Profile() {
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(API_URL + USER_ME_URL, {
            headers: {Authorization: `Bearer ${Cookies.get('token')}`}
        }).then((response) => {
            setUsername(response.data.username);
            setEmail(response.data.email);
            setRole(response.data.role);
            setCreatedAt(response.data.createdAt);
            setLoading(false);
        }).catch(error => {
            console.error('Error fetching user data:', error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center">
            <div className="w-full">
                <AuthNavbar/>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow min-h-0 w-full">
                <div className="">
                    <h1 className="text-4xl text-[#205712] font-semibold mb-2">My information
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-center min-w-[33.33%]">
                    <div className="font-medium text-gray-700 w-full">
                        <div className="text-lg mb-2 border border-gray-300 p-2 rounded w-full flex flex-col">
                            <p className="font-semibold text-gray-400">Email</p>
                            <p>{email}</p>
                        </div>
                        <div className="text-lg mb-2 border border-gray-300 p-2 rounded w-full flex flex-col">
                            <p className="font-semibold text-gray-400">Role</p>
                            <p>{role}</p>
                        </div>
                        <div className="flex flex-col text-lg mb-2 border border-gray-300 p-2 rounded w-full">
                            <p className="font-semibold text-gray-400">Member since </p>
                            <p>{new Date(createdAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <EditUsernameForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;