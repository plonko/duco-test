// TODO: Implement _throttle
// TODO: Move input into separate component
// TODO: More detailed proptypes
// TODO: Move fetchData into separate hook
// TODO: Deal with paginated results

import React, { useEffect, useState } from "react";
import axios from "axios";
import Results from "./Results";

const Typeahead = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

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
