import React, { useEffect, useState } from "react";

function PizzaIngredientSelector(selectedIngredients) {
    let ingredients = selectedIngredients.selectedIngredients
    return (
        <div className="section-content-half center-items">
            <img
                src="/img/ingredient-select/pizza-base.png"
                height="430px"
                width="430px"
            />
            {ingredients
                ? ingredients.map((i, index) => {
                      return (
                          <img
                              key={index}
                              src={`/img/ingredient-select/${
                                  i.name ? i.name : "transparent"
                              }.png`}
                              className="ingredient-img"
                          />
                      );
                  })
                : null}
        </div>
    );
};

export default PizzaIngredientSelector;
