import {useLoginContext} from "../contexts/LoginContext";
import {useNavigate} from "react-router-dom";
import {useMessagesContext} from "../contexts/MessagesContext";
import {useAfsprakenContext} from "../contexts/AfsprakenContext";
import {useLanguageContext} from "../contexts/LanguageContext";
import { FaTrash } from "react-icons/fa";

export function MyBnp() {
    const {login, setLogin} = useLoginContext();
    const navigate = useNavigate();
    const {messages} = useMessagesContext();
    const {afspraken} = useAfsprakenContext();
    const {language} = useLanguageContext();

    const handleLogout = () => {
        setLogin(false)
        navigate("/")
    };

    return (
        <div>
            <h2>MyBnp (Protected)</h2>
            <button onClick={handleLogout}>Logout</button>

            <nav>
                <>
                    {login ?
                        messages.length === 0 ? (
                            <h2>{language === 'NL' ? 'Geen nieuws' : 'Pas des nouvelles'}</h2>
                        ) : (
                            <>  <h2>{language === 'NL' ? 'Berichten' : 'Messages'}</h2>
                                {/*{messages.map((m, index) => <p key={index}>{language === 'NL' ? m[0] : m[1]}</p>)}*/}
                                {messages.map((m, index) => <Message key={index} message={language === 'NL' ? m[0] : m[1]} i={index} />)}
                            </>

                        ) : null
                    }

                    {login ?
                        afspraken.length === 0 ? (
                            <h2>{language === 'NL' ? 'Geen afspraken' : 'Aucun rendez-vous'}</h2>
                        ) : (
                            <>  <h2>{language === 'NL' ? 'Afspraken' : 'Rendez-vous'}</h2>
                                {afspraken.map((a, index) => <p key={index}>{a.datum} - {a.medewerker}</p>)}
                            </>

                        ) : null
                    }
                </>
            </nav>
        </div>
    )
}

function Message({message,i}) {

    const {messages,setMessages} = useMessagesContext();

    const handleDelete = (i) => {
        setMessages(messages.filter((m,index)=>index!==i))
    };

    return <div>
        <FaTrash size={15} color="red" onClick={()=>handleDelete(i)}/>
        <span style={{marginLeft:'3px'}}>{message}</span>
    </div>
}

