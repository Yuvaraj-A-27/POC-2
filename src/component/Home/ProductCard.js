import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(()=>({
    card:{
        marginTop:'50px',
        maxWidth:'80%',
        maxHeight:'100%',
        background: "linear-gradient(45deg, #a1bff0 1%, #cccccc 30%)",
        transition : 'transform 0.3s',
        '&:hover':{
            transform: 'translateY(10px)'
        }
    },
    cardMedia:{
        height: '200px',
        width : '100%',
    },
}))

function ProductCard({image, title, description}){
    const classes = useStyles()

    return(
            <Card className ={classes.card}>
                 <CardActionArea>
                     <CardMedia 
                         className={classes.cardMedia}
                         image={image}
                         title = {image}
                     />
                     <CardContent>
                         <Typography gutterBottom variant="h6" component="h2">
                           {title}
                         </Typography>
                     </CardContent>
                 </CardActionArea>
            </Card>
    )
}

export default ProductCard;