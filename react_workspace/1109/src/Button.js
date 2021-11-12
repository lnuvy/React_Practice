import React from "react";
import './Button.css'

function Button({ children, size, color }) {

    return <button className={`Button ${size} ${color}`}>{children}</button>
}

export default Button;

Button.defaultProps = {
    size: 'medium',
    color: 'tomato'
}