import { Dialog, DialogActions, DialogTitle, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { addToWishList, wishListActive } from '../../Store/Action';

const useStyles = makeStyles(()=>({
    dialogPaper:{
        maxWidth: '1280px',
        maxHeight: '550px',
        minHeight: '550px',
    },
    totalPrice:{
        textAlign : 'right',
        marginRight : '180px'
    }
}))

function WishList(props){
    const classes = useStyles()

    const wishListOfCurrentUser = props.wishList.filter(e=> e.userId===props.activeUserDetail[0].id)

    //product Ids of current user
    const productIds = wishListOfCurrentUser.map(e=> e.productId)
    
    //product details of carted product
    const productDetail = props.product.filter(e => productIds.includes(e.id))
    
    


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
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Id</TableCell>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Price </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productDetail.map((e)=>(
                            <TableRow key= {e.id}>
                                <TableCell>{e.id}</TableCell>
                                <TableCell>{e.title}</TableCell>
                                <TableCell>${e.price}</TableCell>
                            </TableRow>
                        ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
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
        addToWishList : (value) => dispatch(addToWishList(value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WishList);
