import { Dialog, DialogTitle, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addToCart, addToWishList, productPopUpActive, wishListActive } from '../../Store/Action';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(()=>({
    dialogPaper:{
        maxWidth: '1280px',
        maxHeight: '550px',
        minHeight: '550px',
    },
    totalPrice:{
        textAlign : 'right',
        marginRight : '180px'
    },
    deleteIcon:{
        transition : 'transform 0.5s',
        '&:hover':{
            transform: 'translateY(-3px)'
        }
    },
    
}))

function WishList(props){
    const classes = useStyles()

    //state
    const [addToCartAlert, setAddToCartAlert] = useState(false)

    const wishListOfCurrentUser = props.wishList.filter(e=> e.userId===props.activeUserDetail[0].id)

    //product Ids of current user
    const productIds = wishListOfCurrentUser.map(e=> e.productId)
    
    //product details of carted product
    const productDetail = props.product.filter(e => productIds.includes(e.id))
    
    const deleteHandler = (productId) =>{
        const alteredWishList = props.wishList.filter((e) => e.productId!==productId)
        props.addToWishList(alteredWishList)
    }

    const addHandler = (productId) =>{
        props.addToCart(productId, props.activeUserDetail[0].id)
        setAddToCartAlert(true)
        setTimeout(() => {
            setAddToCartAlert(false)
        }, 1000);
    }

    const productPopUpHandler = () =>{
        props.productPopUpActive()
    }

    return(
        <Dialog
        open={props.wishListActive}
        onClose={props.wishListActiveHandler}
        fullWidth='true'
        maxWidth ='lg'
        classes={{ paperWidthLg: classes.dialogPaper }}
        >
            <DialogTitle>
                <h2>
                    Wish List - {props.activeUserDetail[0].name.firstname} {props.activeUserDetail[0].name.lastname}
                </h2>
            </DialogTitle>
            <TableContainer component = {Paper}>
                <Table className={classes.table} stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'><strong>Product Id</strong></TableCell>
                            <TableCell align='center'><strong>Product Name</strong></TableCell>
                            <TableCell align='center'><strong>Price</strong> </TableCell>
                            <TableCell align='center'><strong>Add to Cart</strong> </TableCell>
                            <TableCell align='center'><strong>Delete from WishList</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productDetail.map((e)=>(
                            <TableRow key= {e.id}>
                                <TableCell align='center' >{e.id}</TableCell>
                                <TableCell align='center' className = {classes.deleteIcon} onClick={productPopUpHandler}>{e.title}</TableCell>
                                <TableCell align='center'>${e.price}</TableCell>
                                <TableCell align='center'><AddIcon className={classes.deleteIcon} onClick={()=>addHandler(e.id)}/></TableCell>
                                <TableCell align='center'><DeleteIcon className = {classes.deleteIcon} onClick={()=>deleteHandler(e.id)} /></TableCell>
                            </TableRow>
                        ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            {addToCartAlert &&
                <span textAlign='center'>
                <Alert className = {classes.alert} severity = 'success'>Successfully Added to Cart</Alert>
                </span>
            }
        </Dialog>
    );

}

const mapStateToProps = state =>{
    return{
        // cartActive : state.cartActive,
        activeUserDetail : state.activeUserDetail,
        product : state.product,
        wishListActive : state.wishListActive,
        wishList : state.wishList
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        wishListActiveHandler : () => dispatch(wishListActive()),
        addToWishList : (value) => dispatch(addToWishList(value)),
        addToCart : (productId, userId) => dispatch(addToCart(productId,userId)),
        productPopUpActive : () => dispatch(productPopUpActive())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WishList);
