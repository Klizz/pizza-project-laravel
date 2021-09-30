import React, { useState } from "react";

function NameComponent() {
    const [name, setName] = useState();
    const onNameChange = (e) => {
        setName(e.target.value);
    }
    return (
        <React.Fragment>
            <div className="form-section" id="name">
                <div className="section-content">
                <h3>Paso 1: Escribe tu nombre</h3>
                <input type="text" onChange={onNameChange} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default NameComponent;
