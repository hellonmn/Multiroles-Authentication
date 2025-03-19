import { createContext, useState, useEffect } from "react";
import { getUserRole } from "../utils/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [role, setRole] = useState(null);

    useEffect(() => {
        setRole(getUserRole());
    }, []);

    return (
        <AuthContext.Provider value={{ role }}>
            {children}
        </AuthContext.Provider>
    );
};
