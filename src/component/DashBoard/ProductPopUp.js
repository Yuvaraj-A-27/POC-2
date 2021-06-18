import {  Dialog, DialogContent, DialogContentText, DialogTitle, makeStyles, Paper} from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { addToCart, productPopUpActive } from '../../Store/Action';
import AppleIcon from '@material-ui/icons/Apple';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles(()=>({
    title:{
        marginTop:'-20px',
        height: '30px',
    },
    image:{
        width: '250px',
        marginTop: '50px',
        marginLeft : '-30px',
        marginBottom: '90px'
    },
    icon:{
        marginTop:'-20px'
    },
    emptyDiv:{
        height: '445px',
        width: '51.91%',
        marginLeft:"50%",
        background: '#0212f0',
        borderRadius : '20px 0px 0px 20px',
        display: 'flex',
        position:'static'
    },
    detailDiv:{
        width:'43%',
        marginLeft:'2%'
    },
    productTitle:{
        marginTop:'-270px',
        marginLeft:'2%',
        width:'43%',

    },
    dialogPaper:{
        maxWidth: '1280px',
        maxHeight: '550px',
        minHeight: '550px',
    },
    emptyDiv2:{
        background: '#0212f0',
        width: '.8%',
        marginRight: '200px',
        marginTop: '-390px',
        minHeight:'280px',
        justifyItems:'left',
        display: 'flex',
        position:'static'
    },
    addcartIcon:{
        color: 'white',
        marginTop:'207px',
        marginLeft:'90px',
        transition : 'transform 0.3s',
        '&:hover':{
            transform: 'translateY(-5px)'
        }
    },
    addCartText:{
        color:'white',
        fontSize:'20px',
        marginTop:'208px',
        marginLeft:'10px'
    },
    price:{
        marginLeft:'25px'
    }
}))


function ProductPopUp(props){
    const classes = useStyles()

    //state value 
    if(props.currentProduct!==0){
    const product = props.productList.filter((e) => e.id===props.currentProduct)
    const productRender = product[0]

    const addToCartHandler =()=>{
        props.addToCart(props.currentProduct,props.activeUserDetail[0].id)
    }

    return (
        <Dialog
            open={props.productPopUpActive}
            onClose={props.productPopUpActiveHandler}
            fullWidth='true'
            maxWidth ='lg'
            classes={{ paperWidthLg: classes.dialogPaper }}
        >
            <DialogTitle  className={classes.title}>
                <h1 >
                    <AppleIcon className={classes.icon} fontSize='large' />
                    MyStore
                </h1>
            </DialogTitle>

            <DialogContent>
                <Paper elevation={3} className={classes.emptyDiv}>&ensp;
                    <img className={classes.image} src={productRender.image} alt={productRender.id} />

                    <AddCircleOutlineIcon onClick={addToCartHandler} className={classes.addcartIcon} />
                    <h4 className={classes.addCartText} >Add to Cart</h4>
                </Paper>
                <Paper elevation={3} className={classes.emptyDiv2}>&ensp;</Paper>

                <h4 className={classes.productTitle}>{productRender.title}</h4>
            
            <DialogContentText >
                <p className={classes.detailDiv}>{productRender.description}</p>
            </DialogContentText>

                <h2 className={classes.price}>Price - ${productRender.price}</h2>
                {/* <Paper elevation={3} className={classes.emptyDiv2}>&ensp;</Paper> */}
                {/* <img className={classes.image} src={productRender.image} alt={productRender.id} /> */}
                
            </DialogContent>

        </Dialog>
    );
    }
    return(
        <p>checking</p>
    )
}

const mapStateToProps = state =>{
    return{
        productPopUpActive : state.productPopUpActive,
        currentProduct : state.currentProduct,
        productList : state.product,
        activeUserDetail : state.activeUserDetail
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        productPopUpActiveHandler : ()=> dispatch(productPopUpActive()),
        addToCart : (productId, userId) => dispatch(addToCart(productId, userId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductPopUp);