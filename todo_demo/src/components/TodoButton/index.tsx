import { type } from "os";
import React from "react";
import { useSelector, useDispatch } from "react-redux"

const TodoButton = () => {
    const state = useSelector((state: any) => state.button);
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch({
            type: "EDIT"
        });
    }
    const handleDelete = () => {
        dispatch({
            type: "DELETE"
        });
    }
    const handleDone = () => {
        dispatch({
            type: "DONE"
        });
    }

    return (
        <div>
            <section>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleDone}>Done</button>
            </section>
        </div>
    )
}