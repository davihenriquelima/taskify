"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type Theme = 'dark' | 'light';

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}:{children:ReactNode}) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const storedTheme = localStorage.getItem('theme');
        return (storedTheme as Theme) || 'light' ;
    });

    const toggleTheme = () => {
        setTheme((prevTheme)=> prevTheme === 'light'? 'dark' : 'light')
    }

    useEffect(()=> {
        const root = document.documentElement;
        
        if (theme === 'dark') {
            root.classList.add('dark');
            root.classList.remove('light');
        } else {
            root.classList.add('light');
            root.classList.remove('dark');
        }
        
        localStorage.setItem('theme', theme);
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
  
