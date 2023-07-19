import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { BeatLoader } from "react-spinners";

interface Album {
    userId: number
    id: number
    title: string
}

const AlbumDetails = () => {
    const [album, setAlbum] = useState<Album>();
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const { albumId } = useParams();

    useEffect(() => {
        getAlbumDetails();
    }, [albumId])

    const getAlbumDetails = () => {
        setIsLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
            .then((response) => response.json())
            .then((data) => {
                setAlbum(data);
            })
            .finally(() => setIsLoading(false))
    };

    if (isLoading) {
        return (
            <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
                <BeatLoader
                    color="#5a5a5a"
                    size={30}
                    speedMultiplier={1}
                    style={{ position: "absolute", top: "40%", left: "45%" }}
                />
            </div>
        );
    }
    return (
        <div style={{ margin: "30px" }}>
            <h1>Album Details</h1>
            <hr />
            {album ? (
                <div className="albumDetail">
                    <p><strong>User ID:</strong> {album.userId}</p>
                    <p><strong>ID:</strong> {album.id}</p>
                    <p><strong>Title:</strong> {album.title}</p>
                </div>
            ) : (
                <h1>No album found</h1>
            )}
        </div>
    );
};

export default AlbumDetails;
