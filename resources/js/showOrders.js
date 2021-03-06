import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import OrderCard from "./components/OrderCard";
import Spinner from "react-bootstrap/Spinner";
import "../css/app.css";
import Header from "./components/Header";

function Orders() {
    const [data, setData] = useState(null);
    const [searchTerm, setSearchTerm] = useState(null);

    useEffect(() => {
        fetch("/orders")
            .then((response) => response.json())
            .then((data) => setData(data.orders));
    }, []);

    function search() {
        fetch("/orders")
        .then((response) => response.json())
        .then((data) => setData(data.allorders.filter((i) => i.customer.toLowerCase() === searchTerm.toLowerCase())));
    }

    return (
        <div>
            <Header />
            <div className="container" style={{ paddingTop: "100px" }}>
                <div className="search-section">
                    <div class="d-flex">
                        <input 
                        class="form-control me-2" 
                        type="search" 
                        placeholder="Search order by customer name" 
                        onChange={(e) => setSearchTerm(e.target.value)}
                        aria-label="Search" />
                        <button class="btn btn-outline-success" disabled={!searchTerm} onClick={() => search()}>Search</button>
                    </div>
                </div>
                <div className="row"> 
                {data ? (
                    data.map((item, index) => {
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
