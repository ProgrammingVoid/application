/**
 * Project Name: PlantKeeper
 *
 * @created 29/08/2024
 * @file LoginForm.tsx
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
import {API_URL,  LOGIN_URL} from "../constants";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../provider/authProvider";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setToken} = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const user = {
            email: email,
            password: password,
        }
        axios.post(API_URL + LOGIN_URL, user)
            .then((response ) => {
                const token = response.data.access_token;
                setToken(token);
            }).then(() => navigate('/plants'))
            .catch(error => console.error('Error:', error));

    }
    return (
        <div className="box-content w-fit h-fit p-4 border border-black rounded-2xl">
            <form className="flex max-w-md flex-col gap-4 font-mono font-f" onSubmit={handleSubmit}>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"
                       className={"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none bg-white h-7 placeholder:p-1 p-1"}
                       onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password"
                       className={"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none bg-white h-7 placeholder:p-1 p-1"}
                       onChange={(e) =>
                    setPassword(e.target.value)}/>
                <button type="submit"
                        className=" rounded text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Login
                </button>
            </form>
        </div>
    )
}

export default LoginForm;