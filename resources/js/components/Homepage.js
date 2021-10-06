import React from "react";
import ReactDOM from "react-dom";
import NameComponent from "./Name";

function HomepageComponent({ setName, sendData }) {

    return (
        <div className="hero">
            <div className="hero-inner">
                <span className="main-line">The Pizza project</span>
                <NameComponent setName={setName} />
                <a><button className="cta-btn" onClick={sendData}>Start creating your pizza!</button></a>
            </div>
        </div>
    );
}

export default HomepageComponent;
