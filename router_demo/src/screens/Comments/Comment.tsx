import React from "react";
import { useParams } from "react-router-dom"

const Comment = () => {
    console.log("params", useParams());

    const { commentId, postId } = useParams();
    return <h1>Comment number {commentId} of post number {postId}</h1>
}

export default Comment;