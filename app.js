import React from "react";
import ReactDOM from "react-dom/client";

/*
Header
    - logo
    - Nav items
    -cart

Body
    -Search Bar
    - Restaurant list
        - Restaurant card (many cards)
            - Image
            - Name
            - Rating
            -Cusines
Footer
    - Links
    - copyright etc
*/

const Title =() => (
    <a href="/">
    <img className="logo" alt="logo" src="https://st2.depositphotos.com/1037759/10068/v/950/depositphotos_100680876-stock-illustration-food-logo-template-home-food.jpg" />
    </a>
   )


const Header = () => {
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <h4>Body</h4>
    )
}

const Footer = () => {
    return (
        <h4>Footer</h4>
    )
}


const AppLayout = () => {
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
