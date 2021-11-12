import React from "react";
import './Button.css'

function Button({ children, size, color, handleClick }) {

    return (
        <div className="Btn_Box">
            <button onClick={handleClick} className={`Button ${size} ${color}`}>{children}</button>
        </div>
    )
}

export default Button;

Button.defaultProps = {
    size: 'medium',
    color: 'tomato'
}