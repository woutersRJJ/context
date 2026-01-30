import {Link} from "react-router-dom";
import {useLanguageContext} from "../contexts/LanguageContext";

export function Header(){

    const {language,setLanguage} = useLanguageContext();

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    return <div>
        <h1>BNP Paribas</h1>
        <label htmlFor="language-select">{language === 'NL' ? 'Taal' : 'Langue'}</label>
        <select id="language-select" value={language} onChange={handleLanguageChange}>
            <option value="NL">Nederlands</option>
            <option value="FR">Français</option>
        </select>
        <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
        </nav>


    </div>
}