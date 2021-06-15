import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
import { initialCategory, initialProduct} from "../../Store/Action";
import AppBarComponent from "./AppBarComponent";
import Category from "./Category";
import Product from "./Product";
import NavigationIcon from '@material-ui/icons/Navigation';
import { makeStyles } from "@material-ui/core";
import Login from "./Login";


const useStyles = makeStyles((theme)=>({
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

function Home(props){

    const classes = useStyles()

    useEffect(()=>{
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
        }
        datafetch()
      },[props])

    return(
        <div>
            <AppBarComponent id='Appbar' />
            <Category />
            <Product />
            <a href='#Appbar'><NavigationIcon className={classes.upArrow} /></a>    
            <Login />
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
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Home)