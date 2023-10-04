import Button from "./Button/Button"
import styles from "./cart.module.css"

const CartItem = ({ item }) => {

    return (
        <li className={styles.cartItem}>
            <img className={styles.cartItemImg} alt={item.name} src={item.image}></img>

            <div className={styles.itemDescription}>
                <p>{item.name}</p>
                <span>{item.price}</span>
            </div>
            <div className={styles.btncontainer}>
            <Button style={{
                width:"48px",
                height:"48px",
                padding:"none"
            }} className={styles.btn}>+</Button>
            <p className={styles.quant}>2</p>

            <Button style={{
                width:"48px",
                height:"48px",
                padding:"none"
            }}className={styles.btn}>-</Button>
            </div>


        </li>
    )

}
const Cart = ({ style }) => {
    const cartList = [
        {
            name: "Lamb Chops",
            description:
                "Grilled lamb chops served with a mint yogurt sauce and roasted potatoes.",
            price: 24,
            category: "Entree",
            image: require("../assets/images/menu/Lamb-Chops-ONE-1.jpg"),
        },
        {
            name: "Pasta Primavera",
            description:
                "Fresh pasta with seasonal vegetables and a creamy tomato sauce.",
            price: 26,
            category: "Entree",
            image: require("../assets/images/menu/pasta-primavera-1-768x1152.jpg"),
        },
    ]




    return (
        <div style={style} className={styles.container}>
            <ol className={styles.itemcontainer}>
            {cartList.map((item) => { return <CartItem item={item} /> })}
            </ol>
            <div className={styles.total}>
                <h1>Total</h1>
                <h2>$42.69</h2>
            </div>
        </div>
    )
}

export default Cart;