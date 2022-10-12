import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "../style/Post.css";

function FeaturedPost(props) {
    const { post } = props;

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" onClick={props.onClick}>
                <Card sx={{ display: "flex" }}>
                    <CardContent
                        sx={{ flex: 1, width: "150px", height: "150px" }}
                    >
                        <Typography variant="h6">{post.title}</Typography>
                        <Typography variant="subtitle2">
                            {post.body.length > 115
                                ? post.body.substring(0, 80) + " ..."
                                : post.body}
                        </Typography>

                        <Typography variant="subtitle1" color="primary">
                            Continue reading...
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{
                            width: 160,
                            display: { xs: "none", sm: "block" }
                        }}
                        image="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
                        alt={post.imageLabel}
                    />
                </Card>
            </CardActionArea>
        </Grid>
    );
}

export default FeaturedPost;
