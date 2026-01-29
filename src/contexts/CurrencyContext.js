import {createContext, useState, useEffect, useMemo, useContext} from "react";

export const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
    const [rates, setRates] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadRates() {
            try {
                const res = await fetch(
                    "https://api.frankfurter.app/latest?from=USD&to=EUR,GBP,JPY"
                );
                const json = await res.json();
                setRates(json.rates);
            } catch (err) {
                console.error("Failed to load currency rates:", err);
            } finally {
                setLoading(false);
            }
        }

        loadRates();
    }, []);

    const api = useMemo(() => ({
            rates, loading
        }), [rates,  loading])
    ;

    return (
        <CurrencyContext.Provider value={api}>
            {children}
        </CurrencyContext.Provider>
    );
}

export const useCurrencyContext = () => useContext(CurrencyContext);