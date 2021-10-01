import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import NameComponent from "./components/Name";
import PickDoughtype from "./components/PickDoughtype";
import PickIngredients from "./components/PickIngredients";
import Spinner from "react-bootstrap/Spinner";
import "../css/app.css";

function Create() {
    // DATOS DEL FORMULARIO
    const [name, setName] = useState("");
    const [doughType, setDoughType] = useState();
    const [selectedIngredients, setSelectedIngredients] = useState([
        { price: 0, id: 0 },
    ]);

    const [ingredients, setIngredients] = useState([]);
    const [pizzas, setPizzas] = useState([]);
    const [doughPrice, setDoughPrice] = useState(0);
    const [ingredientsPrice, setIngredientsPrice] = useState(0);

    useEffect(() => {
        const ingredientsURL = "/ingredients";
        const pizzasURL = "/pizza";

        const fetchData = async (url, setResult) => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setResult(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData(ingredientsURL, setIngredients);
        fetchData(pizzasURL, setPizzas);
    }, []);

    useEffect(() => {
        doughType ? setDoughPrice(doughType.price) : console.log("empty");
        selectedIngredients
            ? setIngredientsPrice(
                  selectedIngredients
                      .map((item) => item.price)
                      .reduce((prev, next) => prev + next)
              )
            : console.log("empty");
    }, [doughType, selectedIngredients, setName]);

    async function sendData() {
        return axios
            .post("/order/store", {
                customer: name,
                pizza_id: doughType.id,
                ingredient_id: selectedIngredients,
            })
            .then((res) => {
                // console.log(res)
                window.location.href = `/orders/${res.data.id}`;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <Header />
            <div className="container">
                <h1 className="title">Create your pizza</h1>
                <form method="POST" action="/or">
                    <NameComponent setName={setName} />
                    {pizzas ? (
                        <PickDoughtype
                            doughTypes={pizzas}
                            setDoughType={setDoughType}
                        />
                    ) : (
                        <Spinner animation="border" variant="danger" />
                    )}
                    {ingredients ? (
                        <PickIngredients
                            setIngredients={setSelectedIngredients}
                            ingredientList={ingredients}
                            selectedIngredients={selectedIngredients}
                        />
                    ) : (
                        <Spinner animation="border" variant="danger" />
                    )}
                    <div
                        className="section-content align-center"
                        style={{ paddingTop: "50px" }}
                    >
                        <h1>Total: ${doughPrice + ingredientsPrice}</h1>
                        <span
                            className="text-danger"
                            style={
                                name &&
                                doughType &&
                                selectedIngredients.length > 1
                                    ? { display: "none" }
                                    : { display: "block" }
                            }
                        >
                            All steps must be completed to continue
                        </span>
                        <button
                            type="button"
                            className="continue"
                            disabled={
                                !name ||
                                !doughType ||
                                selectedIngredients.length == 1
                            }
                            onClick={() => sendData()}
                        >
                            Create!
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Create;
ReactDOM.render(<Create />, document.getElementById("create"));
