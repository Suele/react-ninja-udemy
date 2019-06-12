import React from "react";

const Button = ({ props, handleClick }) => (
  <button onClick={handleClick}>{props.children}</button>
);

Button.getDefaultProps = {
  children: "OK"
};

export default Button;
