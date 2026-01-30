import {useNewsFlashesContext} from "../contexts/NewsFlashesContext";
import {useLanguageContext} from "../contexts/LanguageContext";
import {useCurrencyContext} from "../contexts/CurrencyContext";

export default function Home() {
    const {newsFlashes} = useNewsFlashesContext();
    const {language} = useLanguageContext();
    const {rates, loading} = useCurrencyContext();

    return (
        <>
            {
                <>
                    <h2>{language === 'NL' ? 'Nieuws' : 'Nouvelles'}</h2>
                    {newsFlashes.map((n, index) => <p key={index}>{language === 'NL' ? n[0] : n[1]}</p>)}
                </>
            }

            <h2>{language === 'NL' ? 'Vreemde valuta' : 'Devises étrangères'}</h2>
            {loading ? <p>rates loading...</p> : <p>rates loaded</p>}
            <ul>
                {rates && Object.entries(rates).map(([currency, value]) => (
                    <li key={currency}>
                        {currency}: {value}
                    </li>
                ))}
            </ul>

        </>
    );
}
