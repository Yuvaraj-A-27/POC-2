import {  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles} from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { productPopUpActive } from '../../Store/Action';

const useStyles = makeStyles(()=>({
    
}))


function ProductPopUp(props){
    const classes = useStyles()


    return (
        <Dialog
            open={props.productPopUpActive}
            onClose={props.productPopUpActiveHandler}
            fullWidth='true'
            maxWidth ='lg'
        >
            <DialogTitle ></DialogTitle>
            <DialogContent>
            <DialogContentText>
                
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            
            </DialogActions>
        </Dialog>
    );
}

const mapStateToProps = state =>{
    return{
        productPopUpActive : state.productPopUpActive
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        productPopUpActiveHandler : ()=> dispatch(productPopUpActive())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductPopUp);