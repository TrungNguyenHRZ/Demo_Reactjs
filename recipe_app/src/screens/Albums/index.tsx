import React, { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";
import { Link } from 'react-router-dom';

interface Album {
    userId: number
    id: number
    title: string
}
const Albums = () => {
    const [albums, setAlbums] = useState<Album[]>([]);
    const [isLoading, setIsLoading] = useState<Boolean>(false)

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
            <div style={{ position: "relative", width: "100vh", height: "100vh" }}>
                <HashLoader color="#36d7b7" style={{ position: "absolute", top: "50%", left: "50%" }} />
            </div>
        )
    }
    return (
        <div style={{ margin: "30px" }}>
            <h2>Display all title of albums</h2><hr />
            {albums.length > 0 ? (
                <>
                    {albums.map((album) => (
                        <li>
                            <Link className="link-albums" to={`/albums/1`} style={{ marginLeft: "10px" }} key={album.id}>{album.title}</Link>
                        </li>
                    ))}
                </>
            ) : (
                <p>No album found</p>
            )}
        </div>
    )
}

export default Albums;