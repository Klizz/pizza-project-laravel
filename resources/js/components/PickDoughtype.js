import React from "react";

function PickDoughtype() {
    const doughTypes = ["Original", "Orilla rellena", "Crujiente"];
    return (
        <React.Fragment>
            <div className="form-section" id="doughtype">
                <div className="section-content">
                <h3>Paso 2: Elige el tipo de masa</h3>
                <div className="form-check">
                    {doughTypes ? (
                        doughTypes.map((item, index) => {
                            return (
                                <div key={index}>
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name='doughtype'
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor='doughtype'
                                    >
                                        {item}
                                    </label>
                                </div>
                            );
                        })
                    ) : (
                        <Spinner animation="border" variant="danger" />
                    )}
                </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default PickDoughtype;
