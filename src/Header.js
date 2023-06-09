import { useState } from "react";

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

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
