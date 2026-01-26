import {LoginProvider} from "../contexts/LoginContext";
import Home from "../Home";

function ProvidedApp() {
    return (
        <LoginProvider>
            <Home/>
        </LoginProvider>
    );
}

export default ProvidedApp;
