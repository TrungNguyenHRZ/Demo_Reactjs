import React from "react";
import { useParams } from "react-router-dom"

const Post = () => {

    const { postId } = useParams();
    return <h1>Detail of one post {postId}</h1>
}

export default Post;