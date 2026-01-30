import {useLoginContext} from "../contexts/LoginContext";
import { useNavigate } from "react-router-dom";

export function MyBnp(){
    const { setLogin } = useLoginContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        setLogin(false)
        navigate("/")
    };

    return (
        <div>
            <h2>MyBnp (Protected)</h2>
            <button onClick={handleLogout}>Logout</button>

        </div>
    )
}
