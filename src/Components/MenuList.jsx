import { useContext, useState } from "react";
import Button from "./Button/Button";
import { CartContext } from "../context/CartContext";
import styled from "@emotion/styled";

const StyledP = styled.p`
overflow: hidden;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
display: -webkit-box;
margin-bottom: 4px;`


const ListItem = ({item})=>{
  const [quantity,setQuantity] = useState(1)
  const {dispatch} = useContext(CartContext)

  return(
    <li className="menu-item" >
    <img alt={item.name} src={item.image}></img>
    <div className="item-content">
      <h3 style={{
        fontWeight:"500",
        fontSize:"1.1rem"

      }}>{item.name}</h3>
      <StyledP>{item.description}</StyledP>
      <div style={{
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        gap:"8px"
      }}  >
      
        <Button onClick={()=>setQuantity((prev)=>prev===10?10:prev+1)}style={{
          width: "30px",
          minHeight: "30px",
          padding: "none"
        }} >+</Button>
        <span>{quantity}</span>
        <Button onClick={()=>setQuantity((prev)=>prev===1?1:prev-1)}style={{
          width: "30px",
          minHeight: "30px",
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