const Title = () => (
    <a href="/">
     <img className="logo" alt="logo" src="https://st2.depositphotos.com/1037759/10068/v/950/depositphotos_100680876-stock-illustration-food-logo-template-home-food.jpg" />
    </a>
  );
  
  // Composing Comopnentss
  const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;