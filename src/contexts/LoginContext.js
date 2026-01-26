import React, { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

export function LoginProvider({ children }) {
    const [login, setLogin] = useState(false);

    const api = { login, setLogin };

    return (
        <LoginContext.Provider value={api}>
            {children}
        </LoginContext.Provider>
    );
}

export const useLoginContext = () => useContext(LoginContext);
