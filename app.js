const heading1 = React.createElement("h1",[],"heading1");
const heading2 = React.createElement("h1",[],"heading2");

const div = React.createElement("div",[],[heading1,heading2]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);
