import React, {createContext, useContext, useMemo, useState} from 'react';

const MessagesContext = createContext();

export function MessagesProvider({children}) {
    const [messages, setMessages] = useState([
        ['Nieuw document beschikbaar','Nouveau document disponible'],
        ['Spaarintresten 2025',"Intérêts d'épargne 2025"],
        ['Uw nieuw contract','Votre nouveau contrat']
    ]);

    const api = useMemo(() => ({
            messages, setMessages
        }), [messages, setMessages])
    ;

    return (
        <MessagesContext.Provider value={api}>
            {children}
        </MessagesContext.Provider>
    );
}

export const useMessagesContext = () => useContext(MessagesContext);