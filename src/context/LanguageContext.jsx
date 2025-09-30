import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Language State for English 'en' or Arabic 'ar'
    const [lang, setLang] = useState("en");

    const toggleLanguage = (newLang) => {
        setLang(newLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
