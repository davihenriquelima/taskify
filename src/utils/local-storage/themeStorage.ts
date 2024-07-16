import { Theme } from "@/contexts/ThemeContext";

export const setStoredTheme = (theme: Theme): void => {
    window?.localStorage.setItem('theme', theme);
}

export const getStoredTheme = (): Theme | null => {
    const storedTheme = window?.localStorage.getItem('theme') as Theme;
    return storedTheme || null;
}

//resolver erro undefined