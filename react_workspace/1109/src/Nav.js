import React from "react";
import './Nav.css'

function Nav() {
    const navigate = (url) => {
        window.location.href = url
    }

    return (
        <div className="nav-container">
            내비게이션
        </div>
    )
}

export default Nav