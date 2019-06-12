import React from "react";

const Button = props => (
  <button onClick={props.handleClick}>
    {props.children}
  </button>
);

Button.getDefaultProps = {
  children: "OK"
};

export default Button;
