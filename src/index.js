import React from "react";
import ReactDOM from "react-dom";
import Typeahead from "./Typeahead";
import "./styles.css";

function App() {
  return (
    <div className="App py-3">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h1>Duco test</h1>
            <p className="lead">Search for Star Wars characters</p>
            <Typeahead />
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
