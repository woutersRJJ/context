import {useLoginContext} from "../contexts/LoginContext";
import {useMessagesContext} from "../contexts/MessagesContext";
import {useNewsFlashesContext} from "../contexts/NewsFlashesContext";
import {useLanguageContext} from "../contexts/LanguageContext";
import {useAfsprakenContext} from "../contexts/AfsprakenContext";
import {useCurrencyContext} from "../contexts/CurrencyContext";
import {useFilialenContext} from "../contexts/FilialenContext";

export default function Home() {
    const {login, setLogin} = useLoginContext();
    const {messages} = useMessagesContext();
    const {newsFlashes} = useNewsFlashesContext();
    const {language, setLanguage} = useLanguageContext();
    const {afspraken} = useAfsprakenContext()
    const {rates, loading} = useCurrencyContext()
    const {filialen} = useFilialenContext()

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <>
            <h1>BNP Paribas</h1>

            <label htmlFor="language-select">{language === 'NL' ? 'Taal' : 'Langue'}</label>
            <select id="language-select" value={language} onChange={handleLanguageChange}>
                <option value="NL">Nederlands</option>
                <option value="FR">Français</option>
            </select>

            {
                <>
                    <h2>{language === 'NL' ? 'Nieuws' : 'Nouvelles'}</h2>
                    {newsFlashes.map((n, index) => <p key={index}>{language === 'NL' ? n[0] : n[1]}</p>)}
                </>
            }

            {
                <>
                    <h2>{language === 'NL' ? 'Filialen' : 'Filiales'}</h2>
                    {filialen.map((f, index) => <p key={index}>{f.postcode} {f.gemeente}</p>)}
                </>
            }

            <h2>{language === 'NL' ? 'Vreemde valuta' : 'Devise étrangères'}</h2>
            {loading ? <p>rates loading...</p> : <p>rates loaded</p>}
            <ul>
                {rates && Object.entries(rates).map(([currency, value]) => (
                    <li key={currency}>
                        {currency}: {value}
                    </li>
                ))}
            </ul>

            <nav>
                {login ? (
                    <>
                        <button onClick={() => setLogin(false)}>Logout</button>

                        {
                            messages.length === 0 ? (
                                <h2>{language === 'NL' ? 'Geen nieuws' : 'Pas des nouvelles'}</h2>
                            ) : (
                                <>  <h2>{language === 'NL' ? 'Berichten' : 'Messages'}</h2>
                                    {messages.map((m, index) => <p key={index}>{language === 'NL' ? m[0] : m[1]}</p>)}
                                </>

                            )
                        }

                        {
                            afspraken.length === 0 ? (
                                <h2>{language === 'NL' ? 'Geen afspraken' : 'Aucun rendez-vous'}</h2>
                            ) : (
                                <>  <h2>{language === 'NL' ? 'Afspraken' : 'Rendez-vous'}</h2>
                                    {afspraken.map((a, index) => <p key={index}>{a.datum} - {a.medewerker}</p>)}
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
