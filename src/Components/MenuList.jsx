import { useContext, useState } from "react";
import Button from "./Button/Button";
import { CartContext } from "../context/CartContext";

const ListItem = ({item})=>{
  const [quantity,setQuantity] = useState(1)
  const {dispatch} = useContext(CartContext)

  return(
    <li className="menu-item" >
    <img alt={item.name} src={item.image}></img>
    <div className="item-content">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <div style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
      }}  >
        <Button onClick={()=>setQuantity((prev)=>prev===10?10:prev+1)}style={{
          width: "48px",
          height: "48px",
          padding: "none"
        }} >+</Button>
        <span>{quantity}</span>
        <Button onClick={()=>setQuantity((prev)=>prev===0?0:prev-1)}style={{
          width: "48px",
          height: "48px",
          padding: "none"
        }}>-</Button>
        <Button onClick={()=>{dispatch({type:"addToCart",item,quantity})}} variant={"filled"}>Add to cart</Button>
      </div>
    </div>
  </li>
  )
}


const MenuList = ({ menu, category }) => {
  return (
    <ol className="menu-list">
      {menu.map((item) => {
        if (item.category === category || category === "All") {
          return ( <ListItem item={item}/>
          );
        }
        return null;
      })}
    </ol>
  );
};
export default MenuList;