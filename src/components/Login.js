import {useLoginContext} from "../contexts/LoginContext";

export default function Login() {

    const {login, setLogin} = useLoginContext();

    return <>
        <nav>
            {login ? (
                <>
                    <button onClick={() => setLogin(false)}>Logout</button>
                </>
            ) : (
                <button onClick={() => setLogin(true)}>Login</button>
            )}
        </nav>

    </>

}