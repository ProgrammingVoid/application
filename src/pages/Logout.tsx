/**
 * Project Name: PlantKeeper
 *
 * @created 31/08/2024
 * @file Logout.tsx
 * @version 1.0.0
 * @see https://github.com/Plant-keeper
 *
 * @authors
 *   - Rafael Dousse
 *   - Eva Ray
 *   - Quentin Surdez
 *   - Rachel Tranchida
 */
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { useEffect } from "react";

const Logout = () => {
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setToken(null);
        navigate("/", { replace: true });
    };

    useEffect(() => {
        handleLogout();
    }, []);

    return (<div className="text-2xl">Waiting...</div>);
};

export default Logout;