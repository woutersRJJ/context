import {LoginProvider} from "../contexts/LoginContext";
import Home from "../Home";
import {MessagesProvider} from "../contexts/MessagesContext";
import {NewsFlashesProvider} from "../contexts/NewsFlashesContext";
import {LanguageProvider} from "../contexts/LanguageContext";

function ProvidedApp() {
    return (
        <LanguageProvider>
            <LoginProvider>
                <MessagesProvider>
                    <NewsFlashesProvider>
                        <Home/>
                    </NewsFlashesProvider>
                </MessagesProvider>
            </LoginProvider>
        </LanguageProvider>
    );
}

export default ProvidedApp;
