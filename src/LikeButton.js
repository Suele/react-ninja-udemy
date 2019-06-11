import React from 'react';
import Button from './Button';

const LikeButton = () => (
	<Button handleClick={() => alert('Like')}>Curtir</Button>
);

export default LikeButton;