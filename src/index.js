import React from "react";
import ReactDOM from "react-dom";
import Typeahead from "./Typeahead";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Typeahead />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
