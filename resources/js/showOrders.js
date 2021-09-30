import React, {useEffect,useState} from 'react';
import ReactDOM from 'react-dom';

function Orders() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/orders')
        .then(response => response.json())
        .then(data => setData(data));
    }, [])

    return (
        <div className="container">
            <h1>Mostrar ordenes</h1>
        </div>
    );
}

export default Orders;
ReactDOM.render(<Orders />, document.getElementById('orders'));