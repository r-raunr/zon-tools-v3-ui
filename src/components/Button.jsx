import React from 'react';
import '../styles/Button.css'
const Button = ({
    name,
    onClick
}) => (
    <button onClick={onClick} className="_btn">{name}</button>
);

export default Button;
