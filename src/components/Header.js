import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import useOnlineStatus from "../hooks/useOnlinestatus";
import {useSelector} from 'react-redux';

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

  const {loggedInUser} =  useContext(UserContext);

  //selector is a hook in react reduc library and we are subscribing to the store using the selector

  const cartItems = useSelector((store)=> store.cart.items);
  console.log(cartItems);

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
          <li className="px-4 font-bold text-xl"><Link to="/cart">Cart({cartItems.length} items)</Link></li>
          {
            isLoggedIn ? <button type="button" onClick={() => setIsLoggedIn(false)}>logOut</button> : <button type="button" onClick={() => setIsLoggedIn(true)}>login</button> 
          }
           <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
