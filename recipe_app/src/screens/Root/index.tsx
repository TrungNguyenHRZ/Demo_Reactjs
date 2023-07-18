import React from "react";
import { Link, Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            <div id="header">
                <div id="navbar">
                    <ul>
                        <li className="nav-h1"><Link className="link-index" to="">Recipe Book</Link></li>
                        <li className="nav-item"><Link className="link-index" to="/recipes">Recipes</Link></li>
                        <li className="nav-item"><Link className="link-index" to="/shopping-list">Shopping List</Link></li>
                        <li className="nav-item"><Link className="link-index" to="/albums">Albums</Link></li>
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