import React, { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import { Link } from 'react-router-dom';
import './index.css'

interface Album {
    userId: number
    id: number
    title: string
}
const Albums = () => {
    const [albums, setAlbums] = useState<Album[]>([]);
    const [isLoading, setIsLoading] = useState<Boolean>(false);

    useEffect(() => {
        getAllAlbums();
    }, []);

    const getAllAlbums = () => {
        setIsLoading(true)
        fetch("https://jsonplaceholder.typicode.com/albums/")
            .then((response) => response.json())
            .then((data) => {
                setAlbums(data);
            })
            .finally(() => setIsLoading(false));
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
        )
    }

    return (
        <div id="container-albums">
            <div style={{ margin: "30px" }}>
                <h1>Display all title of albums</h1><hr />
                {albums.length > 0 ? (
                    <ul className="grid" style={{ listStyleType: `decimal` }}>
                        {albums.map((album) => (
                            <li className="li-album" key={album.id}>
                                <Link
                                    className="link-albums"
                                    to={`/albums/${album.id}`}
                                    style={{ marginLeft: "10px" }} >
                                    {album.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No album found</p>
                )}
            </div>
        </div>
    )
}

export default Albums;