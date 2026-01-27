import React, {createContext, useContext, useMemo, useState} from 'react';

const LanguageContext = createContext();

export function LanguageProvider({children}) {
    const [language, setLanguage] = useState('NL');

    const api = useMemo(() => ({
        language, setLanguage
        }), [language, setLanguage])
    ;

    return (
        <LanguageContext.Provider value={api}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguageContext = () => useContext(LanguageContext);