import { useState } from "react";
import { RES_LOGO } from "../utils/constants";

const Header=()=>{
    const [auth,setAuth]=useState(false);
    console.log("header componenet rendered")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={RES_LOGO}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li><button onClick={()=>{setAuth((prev)=>!prev)}}>{auth?"Login in":"SignUp"}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
