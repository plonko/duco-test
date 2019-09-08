import React, { useEffect } from "react";
import axios from "axios";

const Typeahead = () => {
  const [query, setQuery] = React.useState("");
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const fetchData = () => {
      return axios
        .get("https://swapi.co/api/people/", {
          params: {
            format: "json",
            search: query
          }
        })
        .then(({ data }) => {
          setData(data);
          console.log(data);
        })
        .catch(error => console.log(error));
    };

    if (query.length > 2) {
      fetchData();
    }
  }, [query]);

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
    </>
  );
};

export default Typeahead;
