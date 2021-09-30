import React from "react";
import ReactDOM from "react-dom";

function HomepageComponent() {
    return (
        <div className="hero">
            <div className="hero-inner">
                <span className="main-line">The Pizza project</span>
                <a href="/orders/create"><button className="cta-btn">Start creating your pizza!</button></a>
            </div>
        </div>
    );
}

export default HomepageComponent;
