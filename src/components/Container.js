import React from "react";

function Container({children}) {
    return (
        <div className="container d-flex">
            {children}
        </div>
    )
}

export default Container;