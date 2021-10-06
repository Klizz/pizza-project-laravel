import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import OrderCard from "./components/OrderCard";
import Spinner from "react-bootstrap/Spinner";
import "../css/app.css";
import Header from "./components/Header";

function Details() {
    const [data, setData] = useState(null);
    const [dataIngredients, setDataIngredients] = useState(null);
    const [dataPizza, setDataPizza] = useState(null);

    useEffect(() => {
        fetch("/orders")
            .then((response) => response.json())
            .then((data) => setData(data), console.log(data));
    }, []);
    useEffect(() => {
        fetch("/ingredients")
            .then((response) => response.json())
            .then((dataIngredients) => setDataIngredients(dataIngredients));
    }, []);
    useEffect(() => {
        fetch("/pizza")
            .then((response) => response.json())
            .then((dataPizza) => setDataPizza(dataPizza));
    }, []);

    let url = window.location.href;
    const currentOrder = url.split("/").pop();

    return (
        <div>
            <Header />
            <div className="container">
                {data && dataIngredients && dataPizza ? (
                    <div
                        className="card large-card"
                        style={{ marginTop: "50px" }}
                    >
                        <img
                            src="https://images.pexels.com/photos/2271194/pexels-photo-2271194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h1
                                className="card-title font-primary-text"
                                style={{ textAlign: "center" }}
                            >
                                Order ID: {currentOrder}
                            </h1>
                            <p className="card-text">
                                <h4 className="font-secondary-text">
                                    Customer:
                                </h4>
                                {
                                    data.allorders.filter((order) => {
                                        return (
                                            order.id === parseInt(currentOrder)
                                        );
                                    })[0].customer
                                }
                            </p>
                            <div className="card-links">
                                <p className="card-text">
                                    <h4 className="font-secondary-text">
                                        Total price:
                                    </h4>
                                    {"$" +
                                        data.allorders.filter((order) => {
                                            return (
                                                order.id ===
                                                parseInt(currentOrder)
                                            );
                                        })[0].total_price}
                                </p>
                                <h4 className="font-secondary-text">
                                    Dough type:
                                </h4>
                                {
                                    dataPizza.filter((item) => {
                                        return (
                                            item.id ===
                                            data.allorders.filter((order) => {
                                                return (
                                                    order.id ===
                                                    parseInt(currentOrder)
                                                );
                                            })[0].pizza_id
                                        );
                                    })[0].doughtype
                                }
                                <h4 className="font-secondary-text">
                                    Ingredients:
                                </h4>
                                {data.ingredients
                                    .filter((ingredientList) => {
                                        return (
                                            ingredientList.order_id ===
                                            parseInt(currentOrder)
                                        );
                                    })
                                    .map((item, index) => {
                                        return (
                                            <ul>
                                                <li key={index}>
                                                    {
                                                        dataIngredients.filter(
                                                            (
                                                                ingredientNames
                                                            ) => {
                                                                return (
                                                                    ingredientNames.id ===
                                                                    item.ingredient_id
                                                                );
                                                            }
                                                        )[0].name
                                                    }
                                                </li>
                                            </ul>
                                        );
                                    })}
                                <a href={`/order/edit/` + currentOrder} className="btn btn-red btn-3-row">
                                    Edit order
                                </a>
                                <a
                                    href="/orders/all"
                                    className="btn btn-green btn-3-row"
                                >
                                    See all orders
                                </a>
                                <a
                                    href="/"
                                    className="btn btn-yellow btn-3-row"
                                >
                                    Homepage
                                </a>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Spinner />
                )}
            </div>
        </div>
    );
}

export default Details;
ReactDOM.render(<Details />, document.getElementById("details"));
