import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";

const CardPhoto = props => {
    const { photo, title, body , imageHeight} = props;

    return (
            <Card sx = {props.sx}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                       // height = {imageHeight}
                        image={photo}
                        alt={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography
                            variant="body1"
                            align="justify"
                            sx={{ padding: "2vh 3vw" }}
                        >
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
       
    );
};
export default CardPhoto;
