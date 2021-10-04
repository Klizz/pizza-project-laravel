import React, { useEffect, useState } from "react";

function OrderCard({ customerName, orderTotal, orderID }) {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title font-primary-text">Order { orderID }</h5>
                    <span className="bold">Customer: </span> {" " + customerName}<br />
                    <span className="bold">Total: </span> {" $" + orderTotal}<br />
                    <a href={'/orders/' + orderID} className="btn btn-red" type="button">
                        See order
                    </a>
                </div>
            </div>
        </div>
    );
}
export default OrderCard;