import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import NameComponent from "./components/Name";
import PickDoughtype from "./components/PickDoughtype";
import PickIngredients from "./components/PickIngredients";
import Spinner from "react-bootstrap/Spinner";
import "../css/app.css";

function Edit() {
    // DATOS DEL FORMULARIO
    const [data, setData] = useState("");
    const [name, setName] = useState("");
    const [doughType, setDoughType] = useState();

    const [selectedIngredients, setSelectedIngredients] = useState();
    const [defaultIngredients, setDefaultIngredients] = useState();

    const [ingredients, setIngredients] = useState([]);
    const [pizzas, setPizzas] = useState([]);
    const [ingredientsPrice, setIngredientsPrice] = useState(0);

    let url = window.location.href;
    const currentOrder = url.split("/").pop();

    useEffect(() => {
        const ingredientsURL = "/ingredients";
        const pizzasURL = "/pizza";

        fetch("/orders/" + currentOrder, {
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setName(data.customer);
                setDoughType(data.pizza);
                setSelectedIngredients(data.ingredients);
                setDefaultIngredients(data.ingredients);
            });

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

    async function sendData() {
        return axios
            .put("/order/edit/" + data.id, {
                customer: name,
                pizza_id: doughType.id,
                ingredient_id: selectedIngredients,
                removeElements: defaultIngredients
                    .filter((x) => !selectedIngredients.includes(x))
                    .map((x) => x.id),
            })
            .then((res) => {
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
                <h1 className="title">Edit order {currentOrder}</h1>
                <form method="POST" action="/or">
                    {data ? (
                        <NameComponent setName={setName} defaultValue={name} />
                    ) : (
                        <Spinner />
                    )}
                    {setDoughType ? (
                        <PickDoughtype
                            doughTypes={pizzas}
                            setDoughType={setDoughType}
                            doughType={doughType}
                        />
                    ) : (
                        <Spinner animation="border" variant="danger" />
                    )}
                    {ingredients && data ? (
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
                        {doughType && selectedIngredients ? (
                            <h1>
                                Total: $
                                {doughType.price +
                                    selectedIngredients.reduce(function (
                                        acc,
                                        curr
                                    ) {
                                        return acc + curr.price;
                                    },
                                    0)}
                            </h1>
                        ) : (
                            "loading"
                        )}
                        <button
                            type="button"
                            className="continue"
                            onClick={() => sendData()}
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Edit;
ReactDOM.render(<Edit />, document.getElementById("edit"));
