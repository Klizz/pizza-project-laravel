import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import OrderCard from "./components/OrderCard";
import Spinner from "react-bootstrap/Spinner";
import "../css/app.css";
import Header from "./components/Header";

function Orders() {
    const [data, setData] = useState(null);
    // const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/orders")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            <Header />
            <div className="container" style={{ paddingTop: "100px" }}>
                <div className="row"> 
                {data ? (
                    data.orders.map((item, index) => {
                        return (
                            <div key={index} className="col">
                                <OrderCard
                                customerName={item.customer}
                                orderID={item.id}
                                orderTotal={item.total_price}
                                 />
                            </div>
                        );
                    })
                ) : (
                    <Spinner animation="border" variant="danger" />
                )}
                </div>
            </div>
        </div>
    );
}

export default Orders;
ReactDOM.render(<Orders />, document.getElementById("show-orders"));
