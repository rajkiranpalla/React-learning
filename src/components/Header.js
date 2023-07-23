import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlinestatus";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://st2.depositphotos.com/1037759/10068/v/950/depositphotos_100680876-stock-illustration-food-logo-template-home-food.jpg"
    />
  </a>
);

// Composing Comopnentss
const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus? "✅" : "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Cart</li>
          {
            isLoggedIn ? <button type="button" onClick={() => setIsLoggedIn(false)}>logOut</button> : <button type="button" onClick={() => setIsLoggedIn(true)}>login</button> 
          }
        </ul>
      </div>
    </div>
  );
};

export default Header;
