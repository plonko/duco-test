import React from "react";
import PropTypes from "prop-types";

const Results = props => {
  const { data } = props;

  const renderResult = () => {
    return (
      <>
        <h6 className="dropdown-header">Dropdown header</h6>
        <a className="dropdown-item" href="#">
          Action
        </a>
      </>
    );
  };

  return (
    <div className="dropdown-menu" style={{ display: "block", top: "auto" }}>
      <h6 className="dropdown-header">Dropdown header</h6>
      <a className="dropdown-item" href="#">
        Actions
      </a>
      <>{data.map(() => renderResult())}</>
    </div>
  );
};

Results.propTypes = {
  data: PropTypes.array.isRequired
};

// Results.defaultProps = {
//   data: []
// };

export default Results;
