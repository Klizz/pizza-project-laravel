import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "../css/app.css";

function createPizza() {
    return (
    <div>
        <h1>Hola</h1>
    </div>
    );
}

export default createPizza;
ReactDOM.render(<createPizza />, document.getElementById("createPizza"));