import React from "react";
import ReactDOM from "react-dom";
import './style.css';

const App = () => {
  return (
    <div>
      <p>React is so awesome! I always enjoy it :)</p>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
