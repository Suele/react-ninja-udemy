import React from 'react';

const Square = (props) => (
	<div style={{
		backgroundColor: props.color,
		heigth: '100px',
	}}/>
);

Square.defaultProps = {
	color: 'red'
}

export default Square;