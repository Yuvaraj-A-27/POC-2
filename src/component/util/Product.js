import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import Carousel from 'react-elastic-carousel'


const breakPoints = [
    {width:1,itemsToShow : 1},
    {width:550,itemsToShow : 2},
    {width:768,itemsToShow : 3},
    // {width:1200,itemsToShow : 4},
]

const useStyles = makeStyles((theme)=>({
    heading:{
        textAlign:'left',
        marginTop:'3%',
        marginLeft : '3%',
        fontWeight:'800',
        width: '30%',
        background: 'linear-gradient(10deg, #2c0ccc 5%, #7665c9 85%)',
        border: 0,
        fontSize: 20,
        borderRadius: 15,
        color: 'white',
        height: 25,
        padding: '10px 30px',
        transition : 'width 1s',
        '&:hover':{
            width: '80%'
        }
    },
    hr:{
        marginTop:'1%',
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        marginBottom: theme.spacing(10),

    },
    
}))

function Product(props){
    const classes = useStyles()

    const product = useSelector(state=>state.product)
    console.log(product);
    const allProduct = product? product.map((e)=>(<ProductCard key={e.id} product_id = {e.id} image= {e.image} title={e.title} />)) : null

    const electronics = product? product.filter((e)=> e.category==='electronics') : null
    const electronicsProduct = electronics? electronics.map((e)=>(<ProductCard key={e.id} product_id = {e.id} image= {e.image} title={e.title}/>)) :null

    const jewelerys = product? product.filter((e)=> e.category==='jewelery') : null
    const jeweleryProduct = jewelerys? jewelerys.map((e)=>(<ProductCard key={e.id} product_id = {e.id} image= {e.image} title={e.title}/>)) : null

    const menClothings = product? product.filter((e)=> e.category==="men's clothing") : null
    const menClothingProduct = menClothings? menClothings.map((e)=>(<ProductCard key={e.id} product_id = {e.id} image= {e.image} title={e.title}/>)) : null

    const womenClothings = product? product.filter((e)=> e.category==="women's clothing") : null
    const womenClothingProduct = womenClothings? womenClothings.map((e)=>(<ProductCard key={e.id} product_id = {e.id} image= {e.image} title={e.title}/>)) : null
    return(
        <div data-testid = {props.dataTestid}>
            <Typography className={classes.heading} variant ='h5'>All Products</Typography>
                <Carousel breakPoints={breakPoints}>
                    {allProduct}
                </Carousel>
                <hr className={classes.hr}/>

            <Typography id='electronics' className={classes.heading} variant ='h5'>Electronics</Typography>
                <Carousel breakPoints={breakPoints}>
                    {electronicsProduct}    
                </Carousel>
                <hr className={classes.hr}/>

            <Typography id='jewelery' className={classes.heading} variant ='h5'>Jewelery</Typography>
                <Carousel breakPoints={breakPoints}>
                    {jeweleryProduct}    
                </Carousel>
                <hr className={classes.hr}/>

            <Typography id="men's clothing" className={classes.heading} variant ='h5'>Men's Clothing</Typography>
                <Carousel breakPoints={breakPoints}>
                    {menClothingProduct}    
                </Carousel>
                <hr className={classes.hr}/>
            
            <Typography id="women's clothing" className={classes.heading} variant ='h5'>Women's Clothing</Typography>
                <Carousel breakPoints={breakPoints}>
                    {womenClothingProduct}    
                </Carousel>
                <hr className={classes.hr}/>
        
        </div>
    )
}

export default Product;