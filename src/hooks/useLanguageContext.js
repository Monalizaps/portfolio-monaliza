import { useContext } from "react";

import { LanguageContext } from "../context/LanguageContext";

export const useLanguageContext = () => {
    const context = useContext(LanguageContext);

    return context;
}