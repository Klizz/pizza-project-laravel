
import React, {useEffect,useState} from 'react';
import ReactDOM from 'react-dom';

function Example() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/orders')
        .then(response => response.json())
        .then(data => setData(data));
    }, [])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">User List : CodeCheef</div>
                        <div className="card-body">
                            {data ? <h1>{data.pizzas[0].doughtype}</h1> : <h1>loading</h1>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

ReactDOM.render(<Example />, document.getElementById('example'));