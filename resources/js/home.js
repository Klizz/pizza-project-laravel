import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import HomepageComponent from "./components/Homepage";
import "../css/app.css";

function Home() {

    const [name, setName] = useState("");

    function sendData() {
        console.log("sendData");
        return axios
            .post("/login", {
                name: name
            })
            .then((res) => {
                // console.log(res)
                // debugger
                window.location.href = `/orders/create`;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <HomepageComponent setName={setName} sendData={() => sendData()} />
        </>
    );
}

export default Home;
ReactDOM.render(<Home />, document.getElementById("home"));
