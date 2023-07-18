import React from "react";

const Form = () => {


    return (
        <>
            <form action="">
                <div className="btn">
                    <button className="btn btn-save">Save</button>
                    <button className="btn btn-cancel">Cancel</button>
                </div>
                <div>
                    <label htmlFor="">Name</label><br />
                    <input type="text" name="" id="" /><br />
                    <label htmlFor="">Image URL</label><br />
                    <input type="text" name="" id="" /><br />
                    <label htmlFor="">Description</label><br />
                    <textarea name="" id="" cols={30} rows={10}></textarea>
                </div>
            </form>
        </>
    )
}

export default Form;