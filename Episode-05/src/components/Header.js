import { RES_LOGO } from "../utils/constants";

const Header=()=>{
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
                </ul>
            </div>
        </div>
    )
}

export default Header;
