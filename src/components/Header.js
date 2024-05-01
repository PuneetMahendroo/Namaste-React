import MainLogo from "../../Assests/img/FVLogo.webp";
import { Link } from "react-router-dom";
import { useState } from "react";
const Title = () => {
    return(
        <div className="Title">
            <a href="/">
                <img 
                    src={MainLogo} alt="Logo"
                />
            </a>
        </div>
    );
};

const Header =() => {

    const [ isLoggedIn , setIsLoggedIn] = useState(true);

    return(
        <div className="Header">
            <Title/>
            <h1>Food Villa</h1>
            <ul className="restlist">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/Cart">Cart</Link></li>
                <li>
                    {(isLoggedIn) ?
                    <button onClick={()=>{setIsLoggedIn(false)}}>Log In</button> :
                    <button onClick={()=>{setIsLoggedIn(true)}}>Log Out</button>
                    }</li>
            </ul>
        </div>
    );
};

export default Header;