import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Typography, ListItemText, ListItemButton } from "@mui/material";
import { useNavigate } from "react-router";
import "../style/Album.css";
import { AlbumDataStore } from "../store/album store/AlbumDataStore";
import { provider, useInstance } from "react-ioc";
import { observer } from "mobx-react-lite";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const Albums = provider(AlbumDataStore)(
    observer(() => {

        const navigate = useNavigate();
        const store = useInstance(AlbumDataStore);

        if(store.loading)
        {
            return (<div>loading...</div>)
        }
        return (
            <div className="Albums">
                {store.albums.map(al => (
                    <div key={al.id}>
                        <ListItemButton
                            component="a"
                            onClick={() =>
                                navigate(`/photos/${al.id}`, { state: al.id })
                            }
                        >
                            <ListItemText primary={al.title} />
                        </ListItemButton>
                    </div>
                ))}
            </div>
        );
    })
);

export default Albums;
