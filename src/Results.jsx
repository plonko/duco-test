import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Results = props => {
  const { data } = props;

  function renderResult(data) {
    const { name, birth_year, gender } = data;

    return (
      <div className="card-body" key={name}>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>DOB:</strong> {birth_year}
        </p>
        <p className="card-text">
          <strong>Gender:</strong> {gender}
        </p>
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
