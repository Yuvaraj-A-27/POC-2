import {  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, makeStyles, Paper} from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { addToCart, addToWishList, productPopUpActive } from '../../Store/Action';
import AppleIcon from '@material-ui/icons/Apple';
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme)=>({
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
        // marginLeft:'25px'
        marginLeft : '2%'
    },
    favIcon:{
        marginLeft : '18%',
        marginTop : '23%',
        // bottom: theme.spacing(-15)
        width:  '40%'

    },
    extendedIcon1: {
        marginRight: theme.spacing(2),
    },
    extendedIcon2: {
        marginRight: theme.spacing(2),
    },
    AddIcon:{
        marginLeft : '-40%',
        marginTop : '33%',
        width:  '40%'
    },
}))


function ProductPopUp(props){
    const classes = useStyles()
    
    //state value for wishlist
    const [wishListHelper, setWishListHelper] = useState(true)

    useEffect(()=>{
        const initailWishListChecking =  props.wishList ? props.wishList.filter((e) => e.productId===props.currentProduct && e.userId===props.activeUserDetail[0].id) : []
        if(initailWishListChecking.length===0){
            setWishListHelper(true)
        }
        else{
            setWishListHelper(false)
        }
    
    }, [props])


    //product detail
    const product = props.productList.filter((e) => e.id===props.currentProduct)
    const productRender = product[0]


    //add to cart
    const addToCartHandler =()=>{
        props.addToCart(props.currentProduct,props.activeUserDetail[0].id)
    }


    //add to wish functionalities
    const addToWishListHandler =()=>{
        const updatedWishList = props.wishList ? props.wishList.filter((e) => e.productId===props.currentProduct && e.userId===props.activeUserDetail[0].id) : []

        if(updatedWishList.length===0){
            setWishListHelper(false)
            props.addToWishList([...props.wishList, {productId : props.currentProduct, userId : props.activeUserDetail[0].id}])
        }
        else{
            setWishListHelper(true)
            // const updatedWishList2 = props.wishList.filter(e => (e.productId!=props.currentProduct && e.userId!=props.activeUserDetail[0].id))
            const updatedWishList2 = props.wishList.filter((e)=>{
                if(e.userId===props.activeUserDetail[0].id){
                    if(e.productId !== props.currentProduct){
                        return e
                    }
                }
                else{
                    return e
                }
            })
            props.addToWishList(updatedWishList2)
        }
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

                    <Fab variant="extended" color={wishListHelper?'default':'secondary'} onClick = {addToWishListHandler} className={classes.favIcon}>
                        <FavoriteIcon className={classes.extendedIcon1}/>{wishListHelper?'Add to WishList':'Remove from WishList'}
                    </Fab>
                    <Fab variant="extended" color='default' onClick={addToCartHandler} className={classes.AddIcon}>
                        <AddIcon className={classes.extendedIcon2}/>Add to Cart
                    </Fab>
                    {/* <AddCircleOutlineIcon onClick={addToCartHandler} className={classes.addcartIcon} />
                    <h4 className={classes.addCartText} >Add to Cart</h4> */}
                </Paper>
                <Paper elevation={3} className={classes.emptyDiv2}>&ensp;</Paper>

                <h4 className={classes.productTitle}>{productRender.title}</h4>
            
            <DialogContentText >
                <p className={classes.detailDiv}>{productRender.description}</p>
            </DialogContentText>

                <h2 className={classes.price}>Price - ${productRender.price}</h2>
                {/* <Paper elevation={3} className={classes.emptyDiv2}>&ensp;</Paper> */}
                {/* <img className={classes.image} src={productRender.image} alt={productRender.id} /> */}
                {/* <Fab variant="extended" color='secondary' className={classes.favIcon}>
                    <FavoriteIcon className={classes.extendedIcon}/>Add to WishList
                </Fab> */}
            </DialogContent>

        </Dialog>
    );
}

const mapStateToProps = state =>{
    return{
        productPopUpActive : state.productPopUpActive,
        currentProduct : state.currentProduct,
        productList : state.product,
        activeUserDetail : state.activeUserDetail,
        wishList : state.wishList
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        productPopUpActiveHandler : ()=> dispatch(productPopUpActive()),
        addToCart : (productId, userId) => dispatch(addToCart(productId, userId)),
        addToWishList : (value) => dispatch(addToWishList(value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductPopUp);