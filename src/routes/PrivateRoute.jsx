import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Auth Provider/AuthProvider";

const PrivateRoutes = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    if (loader) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate >

};

export default PrivateRoutes;