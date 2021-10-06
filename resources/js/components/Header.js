import React from "react";
import ReactDOM from "react-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
                The Pizza Project
            </a>
            <ul class="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/orders/all">
                        See orders
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/orders/create">
                        Create order
                    </a>
                </li>
                <li className="nav-item nav-last">
                    <a className="nav-link" href="/orders/create">
                        Log out
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
