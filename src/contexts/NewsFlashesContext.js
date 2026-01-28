import React, {createContext, useContext, useMemo, useState} from 'react';

const NewsFlashesContext = createContext();

export function NewsFlashesProvider({children}) {
    const [newsFlashes, setNewsFlashes] = useState([
        ['BNP Paribas verhoogt dspaarrente', "BNP Paribas augmente taux d'intérêt"],
        ['Nieuwe Raad van Bestuur bij BNP Paribas', "Nouveau Conseil d'administration"],
        ['BNP Paribas verkozen tot beste bank', 'BNP Paribas élu comme meilleur banque'],
    ]);

    const api = useMemo(() => ({
            newsFlashes, setNewsFlashes
        }), [newsFlashes, setNewsFlashes])
    ;

    return (
        <NewsFlashesContext.Provider value={api}>
            {children}
        </NewsFlashesContext.Provider>
    );
}

export const useNewsFlashesContext = () => useContext(NewsFlashesContext);