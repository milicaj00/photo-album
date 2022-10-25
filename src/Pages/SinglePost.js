import { useEffect, useState } from "react";
import axios from "axios";
import { CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import CardPhoto from "../components/Card";
import "../style/Post.css";
import { provider, useInstance } from "react-ioc";
import { PostDataStore } from "../store/post store/PostDataStore";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const SinglePost = provider(PostDataStore)(observer(() => {

    const [post, setPost] = useState("");

    const store = useInstance(PostDataStore)
    const { id } = useParams();

    useEffect(() => {
        //const id = window.location.href[window.location.href.length - 1];

        // axios.get(BASE_URL + "/posts/" + id).then(res => {
        //     setPost(res.data);
        // });


        store.findById(id)

      //  setPost(store.findById(id))

    }, [store]);

    if(store.loading)
    {
        console.log(store.loading)
        return <div>loading...</div>
    }
    return (
        <div className="SinglePost">
            <Grid sx={{ margin: "1vw", width: "60%" }} elevation={3}>
                <CardPhoto
                    photo="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
                    title={store.post?.title}
                    body={store.post?.body}
                    imageHeight = {'50%'}
                />
            </Grid>
        </div>
    );
}));

export default SinglePost;
