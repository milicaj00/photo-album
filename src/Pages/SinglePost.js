import { useEffect, useState } from "react";
import axios from "axios";
import { CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import CardPhoto from "../components/Card";
import "../style/Post.css";
import { provider, useInstance } from "react-ioc";
import { PostDataStore } from "../store/post store/PostDataStore";
import { observer } from "mobx-react-lite";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const SinglePost = provider(PostDataStore)(observer(() => {

    const [post, setPost] = useState("");

    const store = useInstance(PostDataStore)

    useEffect(() => {
        const id = window.location.href[window.location.href.length - 1];

        // axios.get(BASE_URL + "/posts/" + id).then(res => {
        //     setPost(res.data);
        // });

        setPost(store.findById(id))

    }, [store]);

    return (
        <div className="SinglePost">
            <Grid sx={{ margin: "1vw", width: "60%" }} elevation={3}>
                <CardPhoto
                    photo="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
                    title={post.title}
                    body={post.body}
                    imageHeight = {'50%'}
                />
            </Grid>
        </div>
    );
}));

export default SinglePost;
