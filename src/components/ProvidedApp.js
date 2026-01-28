import {LoginProvider} from "../contexts/LoginContext";
import Home from "../Home";
import {MessagesProvider} from "../contexts/MessagesContext";
import {NewsFlashesProvider} from "../contexts/NewsFlashesContext";
import {LanguageProvider} from "../contexts/LanguageContext";
import {AfsprakenProvider} from "../contexts/AfsprakenContext";

function ProvidedApp() {
    return (
        <LanguageProvider>
            <LoginProvider>
                <MessagesProvider>
                    <NewsFlashesProvider>
                        <AfsprakenProvider>
                            <Home/>
                        </AfsprakenProvider>
                    </NewsFlashesProvider>
                </MessagesProvider>
            </LoginProvider>
        </LanguageProvider>
    );
}

export default ProvidedApp;
