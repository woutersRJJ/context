import {useFilialenContext} from "../contexts/FilialenContext";
import {useLanguageContext} from "../contexts/LanguageContext";

export function Contact() {

    const {filialen} = useFilialenContext()
    const {language} = useLanguageContext();

    return <>
        {
            <>
                <h2>{language === 'NL' ? 'Filialen' : 'Filiales'}</h2>
                {filialen.map((f, index) => <p key={index}>{f.postcode} {f.gemeente}</p>)}
            </>
        }
    </>
}