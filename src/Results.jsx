import React from "react";
import PropTypes from "prop-types";
import Films from "./Films";

const Results = props => {
  const { data } = props;

  function renderResult(data) {
    const { name, birth_year, gender, films } = data;

    return (
      <div className="card-body" key={name}>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>DOB:</strong> {birth_year}
        </p>
        <p className="card-text">
          <strong>Gender:</strong> {gender}
        </p>
        {films ? <Films films={films} /> : null}
      </div>
    );
  }

  function renderCard() {
    return data && data.length ? (
      <div className="card">{data.map(item => renderResult(item))}</div>
    ) : null;
  }

  return renderCard();
};

Results.propTypes = {
  data: PropTypes.array
};

Results.defaultProps = {
  data: []
};

export default Results;
