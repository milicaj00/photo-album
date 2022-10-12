import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedPost from "../components/FeaturedPost";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router";
import "../style/Post.css";
import { provider, useInstance } from "react-ioc";
import { PostDataStore } from "../store/post store/PostDataStore";
import { observer } from "mobx-react-lite";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const Posts = provider(PostDataStore)(
    observer(() => {
        
        const store = useInstance(PostDataStore);

        const navigate = useNavigate();

        if (store.loading) return <div>loading...</div>;
        return (
            <div className="Posts">
                <Grid container spacing={4}>
                    {store.posts.map(p => (
                        <FeaturedPost
                            key={p.id}
                            post={p}
                            onClick={() => navigate(`/post/${p.id}`)}
                        />
                    ))}
                </Grid>
            </div>
        );
    })
);

export default Posts;
