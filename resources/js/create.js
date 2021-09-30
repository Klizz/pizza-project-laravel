import React from "react";
import ReactDOM from "react-dom";
import NameComponent from "./components/Name";
import PickDoughtype from "./components/PickDoughtype";
import PickIngredients from "./components/PickIngredients";
import "../css/app.css";

function Create() {
    return (
        <div>
            <form>
                <NameComponent />
                <PickDoughtype />
                <PickIngredients />
                <div className="section-content align-center">
                <button type="submit" className="continue">
                    Siguiente
                </button>
                </div>
            </form>
        </div>
    );
}

export default Create;
ReactDOM.render(<Create />, document.getElementById("create"));
