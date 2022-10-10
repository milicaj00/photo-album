import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedPost from "../components/FeaturedPost";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router";
import '../style/Post.css'

const BASE_URL = "https://jsonplaceholder.typicode.com";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(BASE_URL + "/posts").then(res => {
           //console.log(res.data);
            setPosts(res.data);
        });
    }, []);

    return (
        <div className="Posts">
            <Grid container spacing={4}>
                {posts.map(p => (
                    <FeaturedPost key = {p.id} post={p} onClick = {() => navigate(`/post/${p.id}`)}/>
                ))}
            </Grid>
        </div>
    );
};

export default Posts;
