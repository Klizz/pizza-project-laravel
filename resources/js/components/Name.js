import React, { useState } from "react";

function NameComponent({ setName, defaultValue }) {
    // const [name, setName] = useState();
    // const onNameChange = (e) => {
    //     setName(e.target.value);
    // }
    return (
        <React.Fragment>
            <div className="form-section" id="name">
                <div className="section-content">
                <h3 className="section-title">Step 1: Write your name</h3>
                <input type="text" defaultValue={defaultValue} onChange={(e) => setName(e.target.value)} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default NameComponent;
