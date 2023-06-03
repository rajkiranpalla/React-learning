import React from "react";
import ReactDOM from "react-dom";

const heading1 = React.createElement("h1",[],"heading1");
const heading2 = React.createElement("h1",[],"heading2");

const div = React.createElement("div",[],[heading1,heading2]);

// will be removed in build as we are using bael plugin to remove console.logs
console.log(div);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);
