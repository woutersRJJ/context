import {useLoginContext} from "./contexts/LoginContext";
import {useMessagesContext} from "./contexts/MessagesContext";
import {useNewsFlashesContext} from "./contexts/NewsFlashesContext";

export default function Home() {
    const {login, setLogin} = useLoginContext();
    const {messages} = useMessagesContext();
    const {newsFlashes} = useNewsFlashesContext();

    return (
        <>
            {
                <>
                    <h2>Nieuws</h2>
                        {newsFlashes.map((n, index) => <p key={index}>{n}</p>)}
                </>
            }
            <nav>
                {login ? (
                    <>
                        <button onClick={() => setLogin(false)}>Logout</button>

                        {
                            messages.length === 0 ? (
                                <h2>Geen berichten</h2>
                            ) : (
                                <>  <h2>Berichten</h2>
                                    {messages.map((m, index) => <p key={index}>{m}</p>)}
                                </>

                            )
                        }

                    </>
                ) : (
                    <button onClick={() => setLogin(true)}>Login</button>
                )}
            </nav>
        </>
    );
}
