import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Results = props => {
  const { data } = props;

  const renderResult = data => {
    const { name, birth_year, gender } = data;

    return (
      <Fragment key={name}>
        <h6 className="dropdown-header">{name}</h6>
        <div className="dropdown-item">
          <strong>DOB:</strong> {birth_year}
        </div>
        <span className="dropdown-item">
          <strong>Gender:</strong> {gender}
        </span>
      </Fragment>
    );
  };

  const getClassName = classNames({
    "dropdown-menu": true,
    show: data.length
  });

  return (
    <div className={getClassName}>{data.map(item => renderResult(item))}</div>
  );
};

Results.propTypes = {
  data: PropTypes.array
};

Results.defaultProps = {
  data: []
};

export default Results;
