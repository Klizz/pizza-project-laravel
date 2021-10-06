import React, { useState } from "react";

function NameComponent({ setName, defaultValue }) {

    return (
        <React.Fragment>
            <div className="form-section" style={{ backgroundColor: 'transparent' }} id="name">
                <div className="section-content">
                <h3 className="name-title">Write your name to continue</h3>
                <input type="text" defaultValue={defaultValue} onChange={(e) => setName(e.target.value)} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default NameComponent;
