import React, { useEffect, useState } from "react";

const PickIngredients = ({setIngredients, ingredientList, selectedIngredients}) => {
    const ingredients = ingredientList

    const onInputChange = (e, item) => {
        if (e.target.checked) {
            setIngredients(selectedIngredients.concat([item]))
        } else {
            setIngredients(selectedIngredients.filter(i => i.id !== item.id))
        }
    }
    return (
        <React.Fragment>
            <div className="form-section" id="ingredients">
            <div className="section-content">
            <h3 className="section-title">Step 3: Choose your toppings</h3>
                {ingredients.map((item, index) => {
                          return (
                              <div key={index} className="form-check">
                                  <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value={item.name}
                                      id={item.name}
                                      onChange={(e) => onInputChange(e, item)}
                                  />
                                  <label
                                      className="form-check-label"
                                      htmlFor={item.name}
                                  >
                                      {`${item.name} ($${item.price})`}
                                  </label>
                              </div>
                          );
                      })}
                </div>
            </div>
        </React.Fragment>
    );
}

export default PickIngredients;
