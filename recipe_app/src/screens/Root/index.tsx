import React from "react";
import { Link, Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            <div id="header">
                <div id="navbar">
                    <ul>
                        <li className="nav-h1"><Link to="">Recipe Book</Link></li>
                        <li className="nav-item"><Link to="/recipes">Recipes</Link></li>
                        <li className="nav-item"><Link to="/shopping-list">Shopping List</Link></li>
                    </ul>
                </div>
            </div>
            <div id="content">
                <Outlet />
            </div>
        </>
    )

}

export default Root;