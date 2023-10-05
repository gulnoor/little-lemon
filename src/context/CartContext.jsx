import { createContext, useEffect, useReducer } from "react"

export const CartContext = createContext(null)
const CartProvider = ({ children }) => {


    if (!window.localStorage.getItem("cart")) {
        window.localStorage.setItem("cart", '{"items":[]}')
    }

    const updateCart = (prev,action) => {
        
        switch (action.type) {
            case "addToCart":{
                if (prev.items.find((previtem)=>{ return previtem.name===action.item.name})) {
                    return prev
                }
                else{
                    return {...prev,items:[...prev["items"],{...action.item}]}
                }
            }
            case "clearCart":{
                return {"items":[]}
            }

        
            default:
                console.log(action.type)
                return prev
    
        }
        
     }
    const [cart, dispatch] = useReducer(updateCart,JSON.parse(window.localStorage.getItem("cart")))
    useEffect(() => {
        window.localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider