import "./Gif.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Gif = ({ url, title, description }) => {
  return (
    <Card sx={{ width: 200, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    // <div className="Gif-wrapper">
    //   <div className="content-wrapper">
    //     <div className="Gif-image">
    //       <img src={url} alt="gif"></img>
    //     </div>
    //     <div className="Gif-content">
    //       <p className="title">{title}</p>
    //       <p className="rating">Rating {description}</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Gif;
