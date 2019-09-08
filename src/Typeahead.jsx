import React, { useEffect } from "react";
import axios from "axios";

const Typeahead = () => {
  const [data, setData] = React.useState([]);

  const fetchData = () => {
    console.log("hey");
    return axios
      .get("https://swapi.co/api/people/", {
        params: {
          format: "json",
          search: "r2"
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
    // .then(response => setData(response));
  };

  return (
    <button
      type="button"
      onClick={() => fetchData()}
      className="btn btn-primary"
    >
      Primary
    </button>
  );
};

export default Typeahead;
