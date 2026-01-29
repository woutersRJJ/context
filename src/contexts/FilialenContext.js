import {createContext, useState, useEffect, useMemo, useContext} from "react";
import {firestoreDatabase} from "../services/firestore";

export const FilialenContext = createContext();

export function FilialenProvider({ children }) {
    const [filialen, setFilialen] = useState(null);

    useEffect(() => {
        async function loadFilialen() {
            try {
                const res = await firestoreDatabase.collection('filialen').get();
                setFilialen(res.docs.map(doc => ({...doc.data()})));
            } catch (err) {
                console.error("Failed to load filialen:", err);
            } finally {

            }
        }

        loadFilialen();
    }, []);

    const api = useMemo(() => ({
            filialen
        }), [filialen])
    ;

    return (
        <FilialenContext.Provider value={api}>
            {children}
        </FilialenContext.Provider>
    );
}

export const useFilialenContext = () => useContext(FilialenContext);