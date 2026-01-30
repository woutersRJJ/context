import { Navigate, useLocation } from "react-router-dom";
import {useLoginContext} from "../contexts/LoginContext";

export default function ProtectedRoute({ children }) {
    const { login } = useLoginContext();
    const location = useLocation();

    if (!login) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
