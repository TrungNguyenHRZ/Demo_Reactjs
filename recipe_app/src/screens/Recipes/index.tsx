import React, { useState } from "react";
import './index.css';
import Form from "./Form";

const Recipes = () => {
    const [showForm, setShowForm] = useState(false);

    const handleNewButtonClick = () => {
        setShowForm(true);
    }
    // if (!showForm) {
    //     return <h1>Please select a Recipe!</h1>
    // }
    return (
        <div id="container">
            <div className="item btn-newRecipe">
                <button onClick={handleNewButtonClick}>New Recipe</button>
            </div>
            <div className="item form-newRecipe">
                {showForm ? <Form /> : <h1>Please select a Recipe!</h1>}
            </div>
        </div>
    )
}

export default Recipes;