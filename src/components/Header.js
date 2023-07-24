import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlinestatus";

const Title = () => (
  <a href="/">
    <img
      className="w-24"
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
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <Title />
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus? "✅" : "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4"><Link to="/contact">Contact</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
          {
            isLoggedIn ? <button type="button" onClick={() => setIsLoggedIn(false)}>logOut</button> : <button type="button" onClick={() => setIsLoggedIn(true)}>login</button> 
          }
        </ul>
      </div>
    </div>
  );
};

export default Header;
