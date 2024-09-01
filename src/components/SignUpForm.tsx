/**
 * Project Name: PlantKeeper
 *
 * @created 29-08-2024
 * @file SignUpForm.tsx
 * @version 1.0.0
 * @see https://github.com/Plant-keeper
 *
 * @authors
 *   - Rafael Dousse
 *   - Eva Ray
 *   - Quentin Surdez
 *   - Rachel Tranchida
 */
import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {API_URL, USER_URL} from "../constants";

function SignUpForm() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const newUser = {
            username: username,
            email: email,
            password: password,
            role: "admin",
        };

        console.log(JSON.stringify(newUser));

        axios.post(API_URL + USER_URL, newUser)
            .then((response: any) => {
                console.log(response);
                navigate("/login");
            })
            .catch((error: any) => console.error('Error:', error));
    };

    return (
        <div className="box-content w-fit h-fit p-4 border border-black rounded-2xl">
            <form className="flex max-w-md flex-col gap-4 font-mono" onSubmit={handleSubmit}>
                <div>
                    <label className="block">Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        type="email"
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none bg-white h-7 placeholder:p-1 p-1"
                        placeholder="Email"
                        required
                    />
                </div>
                <div>
                    <label className="block">Username</label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        id="username"
                        type="text"
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none bg-white h-7 placeholder:p-1 p-1"
                        placeholder="Username"
                        required
                    />
                </div>
                <div>
                    <label className="block">Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        type="password"
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none bg-white h-7 placeholder:p-1 p-1"
                        placeholder="Password"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="rounded text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default SignUpForm;
