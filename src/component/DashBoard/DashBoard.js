import { makeStyles } from '@material-ui/core'
import React from 'react'
import Category from '../util/Category'
import Product from '../util/Product'
import AppBarComponentDB from './AppBarComponentDB'
import NavigationIcon from '@material-ui/icons/Navigation';
import ProductPopUp from './ProductPopUp'


const useStyles = makeStyles(()=>({
    upArrow:{
        position: 'sticky',
        background:'#6b56e3' ,
        bottom: '7%',
        width: '80px',
        height: '60px',
        borderRadius:20,
        color:'white',
        marginLeft:'88%',
        transition : 'transform 0.2s',
        '&:hover':{
            transform: 'translateY(-10px)'
        }
    }
}))

function DashBoard(){
    const classes = useStyles()
    return(
        <div>
            <AppBarComponentDB id='Appbar'/>
            <ProductPopUp />
            <Category />
            <Product />
            <a href='#Appbar'><NavigationIcon className={classes.upArrow} /></a>    
        </div>
    )
}

export default DashBoard

