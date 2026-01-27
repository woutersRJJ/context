import React, {createContext, useContext, useMemo, useState} from 'react';

const LoginContext = createContext();

export function LoginProvider({children}) {
    const [login, setLogin] = useState(false);

    const api = useMemo(() => ({
            login, setLogin
        }), [login, setLogin])
    ;

    return (
        <LoginContext.Provider value={api}>
            {children}
        </LoginContext.Provider>
    );
}

export const useLoginContext = () => useContext(LoginContext);
