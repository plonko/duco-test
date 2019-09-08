import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Films = props => {
  const { films } = props;
  const [filmTitles, setfilmTitles] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      return axios
        .all(films.map(url => axios.get(url)))
        .then(
          axios.spread((...res) => {
            const films = res.map(({ data }) => data.title);
            return setfilmTitles(films);
          })
        )
        .catch(error => console.log(error));
    };
    fetchData();
  }, [films]);

  function renderResult(item) {
    return (
      <p className="card-text" key={item}>
        {item}
      </p>
    );
  }

  function renderResultList() {
    return filmTitles && filmTitles.length
      ? filmTitles.map(item => renderResult(item))
      : null;
  }

  return (
    <>
      <strong>Films</strong>
      {renderResultList()}
    </>
  );
};

Films.propTypes = {
  films: PropTypes.array
};

Films.defaultProps = {
  films: []
};

export default Films;
