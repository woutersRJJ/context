import {LoginProvider} from "../contexts/LoginContext";
import Home from "../pages/Home";
import {MessagesProvider} from "../contexts/MessagesContext";
import {NewsFlashesProvider} from "../contexts/NewsFlashesContext";
import {LanguageProvider} from "../contexts/LanguageContext";
import {AfsprakenProvider} from "../contexts/AfsprakenContext";
import {CurrencyProvider} from "../contexts/CurrencyContext";
import {FilialenProvider} from "../contexts/FilialenContext";
import {Route, Routes} from "react-router-dom";
import {Contact} from "../pages/Contact";
import {Header} from "./Header";
import Login from "./Login";

function ProvidedApp() {
    return (
        <LanguageProvider>
            <CurrencyProvider>
                <LoginProvider>
                    <MessagesProvider>
                        <NewsFlashesProvider>
                            <AfsprakenProvider>
                                <FilialenProvider>
                                    <Header/>
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/contact" element={<Contact />} />
                                        <Route path="/login" element={<Login />} />
                                    </Routes>
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
