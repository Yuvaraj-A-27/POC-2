import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import {loginActive} from '../../Store/Action'

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

function ProductCard({image, title, loginActive}){
    const classes = useStyles()

    return(
            <Card className ={classes.card} onClick={loginActive}>
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

const mapDispatchToProps = dispatch =>{
    return{
        loginActive : ()=>dispatch(loginActive())
    }
}

export default connect(null, mapDispatchToProps)(ProductCard);