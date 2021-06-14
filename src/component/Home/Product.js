import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme)=>({
    heading:{
        textAlign:'left',
        marginTop:'3%',
        marginLeft : '3%',
        marginRight : '3%',
        fontWeight:'800',
        background: 'linear-gradient(45deg, #2c0ccc 10%, #7665c9 50%)',
        border: 0,
        fontSize: 20,
        borderRadius: 3,
        color: 'white',
        height: 25,
        padding: '10px 30px',
    },
    hr:{
        marginTop:'1%',
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        marginBottom: theme.spacing(4),

    },
    card:{
        maxWidth:'20%'
    },
    cardMedia:{
        height: '200px',
        width : '100%'
    }
}))

function Product(){
    const classes = useStyles()

    const product = useSelector(state=>state.product)
    let product1 = product[0]
    console.log(product);

    return(
        <div>
            <Typography className={classes.heading} variant ='h5'>Electronics</Typography>
            <hr className={classes.hr}/>
            <Card className ={classes.card}>
                <CardActionArea>
                    <CardMedia 
                        className={classes.cardMedia}
                        image={product1.image}
                        title = 'product1'
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                          across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default Product;