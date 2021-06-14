import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
import { initialCategory, initialProduct } from "../../Store/Action";
import AppBarComponent from "./AppBarComponent";
import Category from "./Category";
import Product from "./Product";


function Home(props){
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
            <AppBarComponent />
            <Category />
            <Product />
        </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
      initialCategory : (value) => dispatch(initialCategory(value)),
      initialProduct : (value) => dispatch(initialProduct(value)),
    }
  }

export default connect(null,mapDispatchToProps)(Home)