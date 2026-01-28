import React, {createContext, useContext, useMemo, useState} from 'react';

const AfsprakenContext = createContext();

export function AfsprakenProvider({children}) {
    const [afspraken, setAfspraken] = useState(null);

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