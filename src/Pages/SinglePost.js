import { useEffect, useState } from "react";
import axios from "axios";
import { CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import CardPhoto from "../components/Card";
import "../style/Post.css";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const SinglePost = () => {
    // console.log('single')
    //console.log(window.location.href[window.location.href.length-1])

    const [post, setPost] = useState("");

    useEffect(() => {
        const id = window.location.href[window.location.href.length - 1];

        axios.get(BASE_URL + "/posts/" + id).then(res => {
            setPost(res.data);
        });
    }, []);

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
};

export default SinglePost;
