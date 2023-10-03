import { createContext, useEffect, useState } from "react"
import { loadMenu } from "../firebase/firebase.utils"

export const MenuContext = createContext([])

const MenuProvider = ({children}) => {
    const [data,setData] = useState([])
    useEffect(()=>{
        loadMenu().then(response=>setData(response))

    },[])
    return (
        <MenuContext.Provider value={data}>
            {children}

        </MenuContext.Provider>
    )
}

export default MenuProvider