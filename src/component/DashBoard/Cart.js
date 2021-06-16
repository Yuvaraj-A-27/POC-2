import { Dialog, makeStyles } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { cartActive } from '../../Store/Action';

const useStyles = makeStyles(()=>({
    dialogPaper:{
        maxWidth: '1280px',
        maxHeight: '2000px',
        minHeight: '550px',
    },
}))

function Cart(props){
    const classes = useStyles()

    return(
        <Dialog
        open={props.cartActive}
        onClose={props.cartActiveHandler}
        fullWidth='true'
        maxWidth ='lg'
        classes={{ paperWidthLg: classes.dialogPaper }}
        >
        checking
        </Dialog>
    );

}

const mapStateToProps = state =>{
    return{
        cartActive : state.cartActive
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        cartActiveHandler : ()=>dispatch(cartActive())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
