import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
import { initialCategory, initialProduct, initialUserDetail} from "../../Store/Action";
import AppBarComponent from "./AppBarComponent";
import Category from "../util/Category";
import Product from "../util/Product";
import NavigationIcon from '@material-ui/icons/Navigation';
import { makeStyles } from "@material-ui/core";
import Login from "./Login";
import Register from "./Register";


const useStyles = makeStyles(()=>({
    upArrow:{
        position: 'sticky',
        background:'#2c0ccc' ,
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

function Home(props){

    const classes = useStyles()

    async function datafetch(){
        try{
            let resCategory = await axios.get("https://fakestoreapi.com/products/categories")
            if(resCategory){
                props.initialCategory(resCategory.data)
            }
        }
        catch(err){
            console.log(err);
        }

        try{
            let resProduct = await axios.get("https://fakestoreapi.com/products")
            if(resProduct){
                props.initialProduct(resProduct.data)
            }
        }
        catch(err){
            console.log(err);
        }
        try{
            let res = await axios.get("https://fakestoreapi.com/users")
            if(res){
                props.initialUserDetail(res.data)
            }
        }
        catch(err){
            console.log(err);
        }
    }
    
    useEffect(()=>{
        datafetch()
    },[])

    return(
        <div>
            <AppBarComponent dataTestid='AppBar' id='Appbar' />
            <Category dataTestid = 'Category' />
            <Product dataTestid = 'Product' />
            <a href='#Appbar'><NavigationIcon data-testid='navIcon' className={classes.upArrow} /></a>    
            <Login dataTestid='Login' />
            <Register dataTestid = 'Register' />
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        loginActive : state.loginActive
    }
}

const mapDispatchToProps = dispatch =>{
    return{
      initialCategory : (value) => dispatch(initialCategory(value)),
      initialProduct : (value) => dispatch(initialProduct(value)),
      initialUserDetail : (value) => dispatch(initialUserDetail(value))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Home)