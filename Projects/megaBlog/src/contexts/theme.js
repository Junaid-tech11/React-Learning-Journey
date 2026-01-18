import { createContext, useContext } from "react";

export const ThemeContext = createContext({


    //here we are going to convert the theme if user click on dark it will turn into dark and so on
    hemeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },


});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}