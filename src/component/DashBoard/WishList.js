import { Dialog, DialogActions, DialogTitle, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { wishListActive } from '../../Store/Action';

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

    const cartOfCurrentUser = props.cart.filter(e=> e.userId===props.activeUserDetail[0].id)

    //contains duplicate
    const productIds = cartOfCurrentUser.map(e=> e.productId)
    //unique ids
    const productId = [...new Set(productIds)]
    
    //product details of carted product
    const productDetail = props.product.filter(e => productId.includes(e.id))
    console.log(productDetail[3]);
    
    // count of each product
    const count = []
    for(let i = 0; i<productId.length; i++){
        let c = 0
        for(let j=0; j<productIds.length; j++){
            if(productId[i]===productIds[j]){
                c++
            }
        }
        count.push({id: productId[i], count:c})
    }
    

    //total price
    var totalPrice = 0
    for(let i in count){
        for(let j in productDetail){
            if(count[i].id === productDetail[j].id){
                totalPrice = totalPrice + (count[i].count * productDetail[j].price)
            }
        }
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
        cart : state.cart,
        product : state.product,
        wishListActive : state.wishListActive
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        wishListActiveHandler : () => dispatch(wishListActive())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WishList);