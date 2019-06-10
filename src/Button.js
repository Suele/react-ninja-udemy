import React from 'react';

const Button = (props) => (
    <button>{props.children}</button>
);

Button.getDefaultProps = {
    children: 'OK'
}

export default Button;