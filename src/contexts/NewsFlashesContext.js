import React, {createContext, useContext, useMemo, useState} from 'react';

const NewsFlashesContext = createContext();

export function NewsFlashesProvider({children}) {
    const [newsFlashes, setNewsFlashes] = useState([
        'BNP Paribas verhoogt zijn spaarrente',
        'Nieuwe raad van bestuur bij BNP paribas',
        'BNP Paribas verkozen tot beste bank']);

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