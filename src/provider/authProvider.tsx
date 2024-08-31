/**
 * Project Name: PlantKeeper
 *
 * @created 31/08/2024
 * @file authProvider.tsx
 * @version 1.0.0
 * @see https://github.com/Plant-keeper
 *
 * @authors
 *   - Rafael Dousse
 *   - Eva Ray
 *   - Quentin Surdez
 *   - Rachel Tranchida
 */
import axios from "axios";
import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

interface AuthContextType {
    token: string | null;
    setToken: (newToken: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [token, setToken_] = useState<string | null>(Cookies.get("token") || null);

    const setToken = (newToken: string | null) => {
        if (newToken) {
            Cookies.set('token', newToken, { secure: true, sameSite: 'Strict' }); // Set the cookie directly
        } else {
            Cookies.remove('token'); // Remove the cookie if the token is null
        }
        setToken_(newToken); // Update the React state
    };

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
        } else {
            delete axios.defaults.headers.common["Authorization"];
        }
    }, [token]);

    const contextValue = useMemo(() => ({
        token,
        setToken,
    }), [token]);

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
export default AuthProvider;