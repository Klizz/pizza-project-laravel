import React, { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';

function PickDoughtype() {
    const [ingredients, setIngredients] = useState();

    useEffect(() => {
        const url = "/ingredients";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setIngredients(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);

    return (
        <React.Fragment>
            <div className="form-section" id="ingredients">
            <div className="section-content">
            <h3>Paso 2: Elige tus ingredientes</h3>
                {ingredients
                    ? ingredients.map((item, index) => {
                          return (
                              <div key={index} className="form-check">
                                  <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value={item.name}
                                      id={item.name}
                                  />
                                  <label
                                      className="form-check-label"
                                      htmlFor={item.name}
                                  >
                                      {`${item.name} ($${item.price})`}
                                  </label>
                              </div>
                          );
                      })
                    : <Spinner animation="border" variant="danger" />
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default PickDoughtype;
