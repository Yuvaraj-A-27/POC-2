import { Dialog, DialogActions, DialogTitle, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { addToCart, cartActive, removeFromCart } from '../../Store/Action';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

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
    icon:{
        paddingLeft : '5%',
        paddingRight : '5%',
        transform: 'translateY(3px)',
        transition : 'transform 0.5s',
        '&:hover':{
            transform: 'translateY(0px)'
        }
    }
}))

function Cart(props){
    const classes = useStyles()

    const cartOfCurrentUser = props.cart.filter(e=> e.userId===props.activeUserDetail[0].id)

    //contains duplicate
    const productIds = cartOfCurrentUser.map(e=> e.productId)
    //unique ids
    const productId = [...new Set(productIds)]
    
    //product details of carted product
    const productDetail = props.product.filter(e => productId.includes(e.id))
    
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
    
    const increment = (productId) =>{
        props.addToCart(productId, props.activeUserDetail[0].id)
    }

    const decrement = (productId) =>{
        let alteredCartList = []
        let flag = true
        let cart = props.cart
        for (let i in props.cart){
            if(cart[i].productId===productId && cart[i].userId===props.activeUserDetail[0].id){
                if(flag){
                    flag = false
                    continue
                }
            }
            // console.log(props.cart[i]);
            alteredCartList.push(cart[i])
        }
        props.removeFromCart(alteredCartList)
    }
    


    return(
        <Dialog
        open={props.cartActive}
        onClose={props.cartActiveHandler}
        fullWidth='true'
        maxWidth ='lg'
        classes={{ paperWidthLg: classes.dialogPaper }}
        >
            <DialogTitle>
                <h2>
                    Cart - {props.activeUserDetail[0].name.firstname} {props.activeUserDetail[0].name.lastname}
                </h2>
            </DialogTitle>
            <TableContainer component = {Paper}>
                <Table className={classes.table} stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'><strong>Product Id</strong></TableCell>
                            <TableCell align='center'><strong>Product Name</strong></TableCell>
                            <TableCell align='center'><strong>Price</strong> </TableCell>
                            <TableCell align='center'><strong>Quantity</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productDetail.map((e)=>(
                            <TableRow key= {e.id}>
                                <TableCell align='center'>{e.id}</TableCell>
                                <TableCell align='center'>{e.title}</TableCell>
                                <TableCell align='center'>${e.price}</TableCell>
                                {/* <TableCell>
                                    {count.filter}
                                </TableCell> */}
                                
                                {count.map(ele => {
                                    if(ele.id === e.id){
                                        return <TableCell align='center'>
                                                <AddIcon fontSize='small' className={classes.icon} onClick={() => increment(e.id)}/>
                                                    <strong>{ele.count}</strong>
                                                <RemoveIcon fontSize='small' className={classes.icon} onClick={() => decrement(e.id)}/>
                                            </TableCell>
                                    }
                                })}
                            </TableRow>
                        ))

                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <DialogActions>
                <h3 className={classes.totalPrice}>Total Price - ${Math.round(totalPrice)}</h3>                
            </DialogActions>
        </Dialog>
    );

}

const mapStateToProps = state =>{
    return{
        cartActive : state.cartActive,
        activeUserDetail : state.activeUserDetail,
        cart : state.cart,
        product : state.product
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        cartActiveHandler : ()=>dispatch(cartActive()),
        addToCart : (productId, userId) => dispatch(addToCart(productId, userId)),
        removeFromCart : (value) => dispatch(removeFromCart(value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
