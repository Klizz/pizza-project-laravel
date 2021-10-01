import React, { useState } from "react";

const PickDoughtype = ({ doughTypes, setDoughType }) => {
    return (
        <React.Fragment>
            <div className="form-section" id="doughtype">
                <div className="section-content">
                    <h3 className="section-title">Step 2: Select a dough type</h3>
                    <div className="form-check">
                        {doughTypes ? (
                            doughTypes.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="doughtype"
                                            onChange={() => setDoughType(item)}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="doughtype"
                                        >
                                            {`${item.doughtype} ($${item.price})`}
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
};

export default PickDoughtype;
