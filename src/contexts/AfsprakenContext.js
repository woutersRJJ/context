import {createContext, useContext, useEffect, useMemo, useState} from "react";

const AfsprakenContext = createContext();

export function AfsprakenProvider({children}) {
    const [afspraken, setAfspraken] = useState(null);

    useEffect(() => {
        fetch("/afspraken.json")
            .then(res => res.json())
            .then(data => setAfspraken(data));
    }, []);

    const api = useMemo(() => ({
            afspraken, setAfspraken
        }), [afspraken, setAfspraken])
    ;

    return (
        <AfsprakenContext.Provider value={api}>
            {children}
        </AfsprakenContext.Provider>
    );
}

export const useAfsprakenContext = () => useContext(AfsprakenContext);
