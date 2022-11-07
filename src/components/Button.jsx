import React from 'react';
import '../styles/Button.css'
const Button = ({
    name,
    onClick
}) => (
    <button onClick={onClick} className="btn">{name}</button>
);

export default Button;
