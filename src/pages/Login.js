import {useLoginContext} from "../contexts/LoginContext";
import {useNavigate, useLocation } from "react-router-dom";
import {useState} from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const {setLogin} = useLoginContext();

    const from = location.state?.from?.pathname || "/mybnp";

    const handleSubmit = (e) => {
        e.preventDefault();
        setLogin(true)
        //Dit navigeert niet whatsoever, maar is om browse history up-to-date te houden (back/forward knoppen)
        navigate(from, { replace: true })
    };

    return (
        <>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <button type="submit">Login</button>
            </form>
        </>
    )
}