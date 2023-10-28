import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext(null)

const ThemeProvider = ({ children }) => {
    const getTheme = ()=>{
        if (typeof window!== "undefined" && !window.localStorage.getItem("theme")){
          window.localStorage.setItem("theme", "dark");
          return "dark";
        } else if (typeof window!== "undefined"){
    
          return window.localStorage.getItem("theme");
        }
      }
      const [theme, setTheme] = useState(getTheme());

    const toggleTheme = () => {
        theme === "light" ? setTheme(() => "dark") : setTheme(() => "light");
    };

    useEffect(() => {
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;