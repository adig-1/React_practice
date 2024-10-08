import { Logo_Url } from "../utilis/content";
import { useState } from "react";

const Header = () => {
  [btn_Name, setbtn_Name] = useState("Login");
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img 
          src={Logo_Url}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <button className="login-btn" onClick={()=>{(btn_Name=="Login"?setbtn_Name("Logout"):setbtn_Name("Login"))}}>{btn_Name}</button>
          </ul>
        </div>
      </div>
    </>
  );
};


export default Header;