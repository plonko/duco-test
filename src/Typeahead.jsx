import React, { useEffect } from "react";
import axios from "axios";
import Results from "./Results";

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

    if (query.length === 0) {
      setData([]);
    } else if (query.length > 2) {
      fetchData();
    }
  }, [query]);

  return (
    <>
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <Results data={data.results} />
    </>
  );
};

export default Typeahead;
