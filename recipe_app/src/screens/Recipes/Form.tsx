import React from "react";

const Form = () => {


    return (
        <>
            <form className="form-recipes" action="">
                <div className="">
                    <button className="btn btn-save">Save</button>
                    <button className="btn btn-cancel">Cancel</button>
                </div>
                <div className="input-form">
                    <label htmlFor="">Name</label><br />
                    <input type="text" name="" id="" /><br />
                    <label htmlFor="">Image URL</label><br />
                    <input type="text" name="" id="" /><br />
                    <label htmlFor="">Description</label><br />
                    <textarea name="" id="" cols={30} rows={10}></textarea>
                </div>
            </form>
            <div>
                <button className="btn btn-addIngredient">Add Ingredient</button>
            </div>
        </>
    )
}

export default Form;