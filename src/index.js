import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import react_icon from "./react-icon.svg";

const App = () => {
  return (
    <div>
      <img src={react_icon} style={{ width: 250 }} />
      <p>React is so awesome! I always enjoy it :)</p>

    </div>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
