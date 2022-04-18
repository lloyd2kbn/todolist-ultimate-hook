import React,{createContext,useState} from 'react'
export const ThemeContext=createContext();//tao ra doi tuong context
const ThemeContextProvider=({children})=>{//kho du lieu
        //State
        const [theme,setTheme]=useState({
            isLightTheme:true,
            light:{
                background:'rgb(240,240,240)',
                color:'black'
            },
            dark:{
                background:'rgb(39,39,39)',
                color:'white'
            }
        })
          //  Fucntion Toggle Theme
          const toggleTheme=()=>{
            setTheme({...theme,isLightTheme:!theme.isLightTheme});
        }

        
          //Context Data
        const themeContextData={
            theme,
            toggleTheme
        }
      
        // Return Provider
        return (
            <ThemeContext.Provider value={themeContextData}>{children}</ThemeContext.Provider>
        )
    }
    export default ThemeContextProvider;

