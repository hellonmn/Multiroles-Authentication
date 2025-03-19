import {jwtDecode} from "jwt-decode";

export const getUserRole = () => {
    const token = localStorage.getItem("userToken");
    if (!token) return null;

    try {
        const decoded = jwtDecode(token);
        // console.log(decoded.userInfo.role.name)
        return decoded.userInfo.role.name; // Extract role
    } catch (error) {
        console.error("Invalid token", error);
        return null;
    }
};
