import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import react_icon from "./react-icon.svg";
import woman from './enjoy.png';

const App = () => {
  return <div>
    <img src={react_icon} style={{ width: 250 }} />
    <p>React is so awesome! Icon file size {String.fromCharCode(60)} 1mb </p>
    <img className="woman" src={woman} />
    <p>I always enjoy React (.png image)</p>
    <img src={icons} />
    </div>; 
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
