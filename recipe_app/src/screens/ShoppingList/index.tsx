import React from "react";


const ShoppingList = () => {
    return (
        <>
            <div id="container-shopping">
                <div className="input-data">
                    <div className="item-shopping input-name">
                        <label htmlFor="">Name</label><br />
                        <input type="text" />
                        <div>
                            <button className="btn btn-add">Add</button>
                            <button className="btn btn-clear">Clear</button>
                        </div>
                    </div>
                    <div className="item-shopping input-amount">
                        <label htmlFor="">Amount</label><br />
                        <input type="text" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default ShoppingList;