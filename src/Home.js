import { useLoginContext } from "./contexts/LoginContext";

export default function Home() {
    const { login, setLogin } = useLoginContext();

    return (
        <nav>
            {login ? (
                <>
                    <span>Welcome!</span>
                    <button onClick={() => setLogin(false)}>Logout</button>
                </>
            ) : (
                <button onClick={() => setLogin(true)}>Login</button>
            )}
        </nav>
    );
}
