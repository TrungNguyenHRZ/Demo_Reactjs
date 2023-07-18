import React from "react";
import Table from "./Table";

const ShoppingList = () => {
    return (
        <>
            <div id="container-shopping">
                <form className="form-data" action="">
                    <div className="input-data">
                        <div className="item-shopping input-name">
                            <label htmlFor="">Name</label><br />
                            <input type="text" />
                        </div>
                        <div className="item-shopping input-amount">
                            <label htmlFor="">Amount</label><br />
                            <input type="text" />
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-add">Add</button>
                        <button type="reset" className="btn btn-clear">Clear</button>
                    </div>
                </form>
                <div className="table-data">
                    <Table />
                </div>
            </div>
        </>
    )
}

export default ShoppingList;