import React from "react";
import ReactDOM from "react-dom";

function Homepage() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Hola</div>

                        <div className="card-body">
                            Soy la pagina homepage
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;

ReactDOM.render(<Homepage />, document.getElementById('homepage'));
