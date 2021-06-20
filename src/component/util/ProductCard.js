import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import {currentProduct, loginActive, productPopUpActive} from '../../Store/Action'

const useStyles = makeStyles(()=>({
    card:{
        marginTop:'50px',
        maxWidth:'350px',
        maxHeight:'500px',
        background: "linear-gradient(45deg, #a1bff0 1%, #cccccc 30%)",
        transition : 'transform 0.3s',
        '&:hover':{
            transform: 'translateY(10px)'
        },
        boxShadow:'-5px -5px 15px -3px',
        borderRadius : '5%'
    },
    cardMedia:{
        height: '200px',
        width : '350px',
    },
}))

function ProductCard({product_id,image, title, loginActive, activeUser,productPopUpActiveHandler,currentProductHandler}){
    const classes = useStyles()

    const productPopUpHandler = ()=>{
        productPopUpActiveHandler()
        currentProductHandler(product_id)
    }

    return(
            <Card data-testid = 'productCard' className ={classes.card} onClick={activeUser.length!==0?productPopUpHandler:loginActive}>
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

const mapStateToProps = state =>{
    return{
        activeUser : state.activeUserDetail
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        loginActive : ()=>dispatch(loginActive()),
        productPopUpActiveHandler : ()=> dispatch(productPopUpActive()),
        currentProductHandler : (value)=> dispatch(currentProduct(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);