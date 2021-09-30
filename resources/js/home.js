import React from "react";
import ReactDOM from "react-dom";
import HomepageComponent from "./components/Homepage";
import "../css/app.css";

function Home() {
    return (
        <>
            <HomepageComponent />
        </>
    );
}

export default Home;
ReactDOM.render(<Home />, document.getElementById("home"));
