import Button from "./Button/Button";
import "./TopNav.css"

const TopNav = ()=>{
    const buttonStyle = {
        border:"none",
        padding:"1rem 3.5rem",
        fontSize:"1.5rem",
        minHeight:"85px",
        flex:"1"
        
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