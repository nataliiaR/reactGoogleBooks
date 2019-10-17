import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav mr-auto">
                        <li className={ window.location.pathname === "/" || window.location.pathname === "/search" ? "active" : "" }>
                            <Link className="nav-link" to="/search">Search</Link>
                        </li>
                        <li className={ window.location.pathname === "/books" ? "active" : "" }>
                            <Link className="nav-link" to="/books">Saved Books</Link>
                        </li>
                    </ul>
                    <br />
                </div>
            </nav>
        </div>
    )
}

export default Navbar;