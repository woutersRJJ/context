import {LoginProvider} from "../contexts/LoginContext";
import Home from "../Home";
import {MessagesProvider} from "../contexts/MessagesContext";
import {NewsFlashesProvider} from "../contexts/NewsFlashesContext";

function ProvidedApp() {
    return (
        <LoginProvider>
            <MessagesProvider>
                <NewsFlashesProvider>
                    <Home/>
                </NewsFlashesProvider>
            </MessagesProvider>
        </LoginProvider>
    );
}

export default ProvidedApp;
