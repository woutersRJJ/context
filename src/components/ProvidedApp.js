import {LoginProvider} from "../contexts/LoginContext";
import Home from "../pages/Home";
import {MessagesProvider} from "../contexts/MessagesContext";
import {NewsFlashesProvider} from "../contexts/NewsFlashesContext";
import {LanguageProvider} from "../contexts/LanguageContext";
import {AfsprakenProvider} from "../contexts/AfsprakenContext";
import {CurrencyProvider} from "../contexts/CurrencyContext";
import {FilialenProvider} from "../contexts/FilialenContext";

function ProvidedApp() {
    return (
        <LanguageProvider>
            <CurrencyProvider>
                <LoginProvider>
                    <MessagesProvider>
                        <NewsFlashesProvider>
                            <AfsprakenProvider>
                                <FilialenProvider>
                                    <Home/>
                                </FilialenProvider>
                            </AfsprakenProvider>
                        </NewsFlashesProvider>
                    </MessagesProvider>
                </LoginProvider>
            </CurrencyProvider>
        </LanguageProvider>
    );
}

export default ProvidedApp;
