import React, { useContext, useState, createContext  } from "react";

const QuoteContext = createContext(); 

export function useQuoteContext() {
    return useContext(QuoteContext);
}

export function QuoteContextProvider ({ children }) {
    const [loaded, setLoaded] = useState(true);
    const [quote, setQuote] = useState("");
    const value = {
        setLoaded,
        loaded,
        quote, 
        setQuote
    };
    return (
        <QuoteContext.Provider value={value}>
            {children}
        </QuoteContext.Provider>
    )
}