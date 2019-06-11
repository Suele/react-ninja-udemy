import React from 'react';

const Button = ({ props, handleClick }) => (
	<button onClick={handleClick}>
		{props.children}
	</button>
);

export default Button;