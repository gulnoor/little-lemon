import { useContext, useEffect, useState } from "react"
import Button from "./Button/Button"
import styles from "./cart.module.css"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom"



const CartItem = ({ item }) => {
    const { dispatch } = useContext(CartContext)
    function handleClick(action) {

        return () => dispatch({ type: action, item })

    }

    return (
        <li className={styles.cartItem}>
            <img className={styles.cartItemImg} alt={item.name} src={item.image}></img>
            <div className={styles.itemDescription}>
                <p>{item.name}</p>
                <span>{`$${item.price} x ${item.quantity} = $${item.price*item.quantity}`}</span>
            </div>
            <div className={styles.btncontainer} >
                <Button onClick={handleClick("increment")} style={{
                    width: "48px",
                    height: "48px",
                    padding: "none"
                }} className={styles.btn}>+</Button>
                <span className={styles.quant}>{item.quantity}</span>

                <Button onClick={handleClick("decrement")} style={{
                    width: "48px",
                    height: "48px",
                    padding: "none"
                }} className={styles.btn}>-</Button>
            </div>
        </li>
    )

}
const Cart = ({ style }) => {



    const { cart, dispatch } = useContext(CartContext)
    const [total,setTotal] = useState(0)

 
    

    useEffect(()=>{
        let acc = 0
        Object.values(cart["items"]).forEach((item)=>{
            acc+=item.price*item.quantity;
        })
        setTotal(acc)
    },[cart])
    const navigate = useNavigate()

    return (
        <div style={style} className={styles.container}>
            <h1 style={{
                textAlign: "center",
                padding: "16px"
            }}>Your Cart</h1>
            <Button onClick={() => { dispatch({ type: "clearCart" }) }} >Remove All Items</Button>
            <ol className={styles.itemcontainer}>
                {cart.items ? Object.values(cart.items).map((item) => { return <CartItem item={item} /> }) : <li>No Items In Cart</li>}
            </ol>
            <div className={styles.total}>
                <p>subtotal</p>
                <p>42.69 PKR</p>
                <p>total</p>
                <p>{total}</p>
            </div>
            <Button onClick={()=>navigate("/checkout")}>Review Payment and Address</Button>
        </div>
    )
}

export default Cart;