import {useLoginContext} from "./contexts/LoginContext";
import {useMessagesContext} from "./contexts/MessagesContext";
import {useNewsFlashesContext} from "./contexts/NewsFlashesContext";
import {useLanguageContext} from "./contexts/LanguageContext";

export default function Home() {
    const {login, setLogin} = useLoginContext();
    const {messages} = useMessagesContext();
    const {newsFlashes} = useNewsFlashesContext();
    const {language , setLanguage} = useLanguageContext();

    const handleLanguageChange = (event) => { setLanguage(event.target.value);  };

    return (
        <>
            <h1>BNP Paribas</h1>

            <label htmlFor="language-select">{ language==='NL' ? 'Taal' : 'Langue'}</label>
            <select id="language-select" value={language} onChange={handleLanguageChange} >
                <option value="NL">Nederlands</option>
                <option value="FR">Français</option>
            </select>

            {
                <>
                    <h2>{ language==='NL' ? 'Nieuws' : 'Nouvelles'}</h2>
                        {newsFlashes.map((n, index) => <p key={index}>{ language==='NL' ? n[0] : n[1] }</p>)}
                </>
            }
            <nav>
                {login ? (
                    <>
                        <button onClick={() => setLogin(false)}>Logout</button>

                        {
                            messages.length === 0 ? (
                                <h2>{ language==='NL' ? 'Geen nieuws' : 'Pas des nouvelles'}</h2>
                            ) : (
                                <>  <h2>{language==='NL' ? 'Berichten' : 'Messages'}</h2>
                                    {messages.map((m, index) => <p key={index}>{language==='NL' ? m[0] : m[1]}</p>)}
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
