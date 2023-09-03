import Button from "./Button/Button";
import "./TopNav.css"

const TopNav = ()=>{
    const buttonStyle = {
        border:"none",
        padding:"0 4rem"
    }
    return(
        
        <div className="TopNav">
            <Button style={buttonStyle}>Specials</Button>
            <Button style={buttonStyle}>Reviews</Button>
            <Button style={buttonStyle}>About Us</Button>

        </div>
    )

}
export default TopNav;