import { Grid, makeStyles, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import ProductCard from '../util/ProductCard';
import Carousel from 'react-elastic-carousel'

const breakPoints = [
    {width:1,itemsToShow : 1},
    {width:550,itemsToShow : 2},
    {width:768,itemsToShow : 3},
    // {width:1200,itemsToShow : 4},
]


const useStyles = makeStyles((theme)=>({
    grid :{
        padding: theme.spacing(3),
    }
}))

function Search(props){
    const classes = useStyles()

    //state
    const [search, setSearch] = useState('')

    let result = props.productDetail? props.productDetail.filter(e=>{
        const title = e.title.toLowerCase()
        const description = e.description.toLowerCase()
        return (title.includes(search.toLowerCase()) || description.includes(search.toLowerCase()))
    }) : null
    // console.log(result);
    
    const resultProduct =result? result.map(e=>(<ProductCard product_id ={e.id} title={e.title} image={e.image}/>)) : null

    let carousel = null
    if(result && result.length<15 && search.length>0 && resultProduct.length!==0){
        carousel=<Carousel breakPoints={breakPoints}>
            {resultProduct}    
        </Carousel>
    }
    

    let notFound = null
    if(result && resultProduct.length===0 && search.length >0){
        notFound = <p data-testid = 'not-found'>Oops! Sorry, Your Search Product is not Available</p>
    }
    
    

    return(
        <div>
            <Grid container spacing={1} alignItems='center' justify= 'center' className={classes.grid}>
                <Grid item >
                    <SearchIcon />
                </Grid>
                <Grid item xs='5' >
                    <TextField
                        label="Search for Product"
                        style={{ margin: 8 }}
                        fullWidth
                        size = 'medium'
                        margin="dense"
                        variant="outlined"
                        value = {search}
                        onChange = {e=>setSearch(e.target.value)}
                        // data-testid = 'search-input'
                    />
                </Grid>
            </Grid>
            {/* {result.length<15 && search.length>0 && resultProduct.length!==0 &&
                <Carousel breakPoints={breakPoints}>
                    {resultProduct}    
                </Carousel>
            } */}
            {carousel}
            {/* {resultProduct.length===0 && search.length >0 &&
                <p>Oops! Sorry, Your Search Product is not Available</p>
            } */}
            {notFound}
            
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        productDetail : state.product
    }
}

export default connect(mapStateToProps,null)(Search)