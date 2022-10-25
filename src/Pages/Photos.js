import { Grid } from "@mui/material";
import axios from "axios";
import { observe } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import CardPhoto from "../components/Card";
import { PhotoDataStore } from "../store/photo store/PhotoDataStore";
import { provider, useInstance } from "react-ioc";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const Photos = provider(PhotoDataStore)(
    observer(() => {

        const store = useInstance(PhotoDataStore);

        const { id } = useParams()
        
        useEffect(() => {
          //  const id = window.location.href[window.location.href.length - 1];
            store.readPhotos(id);
        }, [store]);

        if (store.loading) {
            return <div>loading...</div>;
        }
        return (
            <div className="Photos">
                <Grid container>
                    {store.photos.map(p => (
                        <Grid key={p.id} item sm={12} md={4} spacing={3}>
                            <CardPhoto
                                photo={p.thumbnailUrl}
                                title={p.title}
                                sx={{ maxWidth: 345 }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    })
);

export default Photos;
