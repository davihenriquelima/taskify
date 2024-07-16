"use client"

import { getStoredTheme, setStoredTheme } from "@/utils/local-storage/themeStorage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type Theme = 'dark' | 'light';

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}:{children:ReactNode}) => {
    const [theme, setTheme] = useState<Theme>(()=> {
        return getStoredTheme() || 'light'
    });

    const toggleTheme = () => {
        setTheme((prevTheme)=> prevTheme === 'light'? 'dark' : 'light')
    };

    useEffect(()=> {
        setStoredTheme(theme);
        const root = document.documentElement;
        root.classList.remove(theme ==='dark'? 'light' : 'dark');
        root.classList.add(theme);
    },[theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};