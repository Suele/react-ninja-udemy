import React from "react";

const Square = props => (
  <div
    style={{
      backgroundColor: props.color,
      height: "100px",
      width: "100px"
    }}
  />
);

Square.defaultProps = {
  color: "red"
};

export default Square;