import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import CardPhoto from "../components/Card";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const Photos = () => {
    const [photos, setPhotos] = useState([]);

    const location = useLocation();

    useEffect(() => {
        const getData = async () => {
            const id = location.state
                ? location.state
                : window.location.href[window.location.href.length - 1];

            await axios.get(BASE_URL + "/photos").then(res => {
                const photo = res.data.filter(el => el.albumId == id);

                setPhotos(photo);
                // console.log(photo[1]);
            });
        };

        getData();
    }, []);

    return (
        <div className="Photos">
            <Grid container>
                {photos.map(p => (
                    <Grid key={p.id} item sm={12} md={4} spacing={3}>
                        <CardPhoto photo={p.thumbnailUrl} title={p.title} sx={{ maxWidth: 345 }}  />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Photos;
