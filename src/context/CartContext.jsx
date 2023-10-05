import { createContext, useEffect, useReducer } from "react"

export const CartContext = createContext(null)
const CartProvider = ({ children }) => {


    if (!window.localStorage.getItem("cart")) {
        window.localStorage.setItem("cart", '{"items":{}},"totalPrice:0')
    }

    const updateCart = (prev, action) => {

        switch (action.type) {
            case "addToCart": {
                if (Object.keys(prev["items"]).find((previtem) => { return previtem === action.item.name })) {
                    return { ...prev, items: { ...(prev["items"]), [action.item.name]: { ...action.item, quantity: prev.items[[action.item.name]].quantity + action.quantity } } }
                }
                else {
                    return { ...prev, items: { ...(prev["items"]), [action.item.name]: { ...action.item, quantity: action.quantity } } }
                }

            }
            case "clearCart": {
                return { "items": {} }
            }
            case "increment": {
                return { ...prev, items: { ...(prev["items"]), [action.item.name]: { ...action.item, quantity: prev.items[[action.item.name]].quantity + 1 } } }
            }
            case "decrement": {
                if (prev.items[[action.item.name]].quantity === 1) {
                    const temp = { ...prev, items: { ...(prev["items"]), [action.item.name]: { ...action.item, quantity: prev.items[[action.item.name]].quantity - 1 } } }
                    delete temp.items[[action.item.name]]
                    return temp
                }



                else { return { ...prev, items: { ...(prev["items"]), [action.item.name]: { ...action.item, quantity: prev.items[[action.item.name]].quantity - 1 } } } }

            }


            default:
                console.log(action.type)
                return prev

        }

    }
    const [cart, dispatch] = useReducer(updateCart, JSON.parse(window.localStorage.getItem("cart")))
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