import React from "react";
import ReactDOM from "react-dom/client";


// react element
const header1 = <h1>heading1</h1>;

// functional component
const Header2 = () => (
    <h1>heading2</h1>
)

// functional component uses react element and another react functional component
const HeaderElement = () => (
    <div>
    {header1}
    <Header2/>
    </div>
)

// will be removed in build as we are using bael plugin to remove console.logs
console.log(HeaderElement);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderElement/>);
