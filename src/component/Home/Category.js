import { makeStyles, Paper, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useStyles = makeStyles((theme)=>({
    heading:{
        textAlign:'left',
        marginTop:'3%',
        marginLeft : '3%',
        marginRight : '3%',
        fontWeight:'800',
        background: 'linear-gradient(10deg, #9269fa 40%, #d9d9d9 100%)',
        border: 0,
        fontSize: 20,
        borderRadius: 3,
        color: 'white',
        height: 25,
        padding: '10px 30px',


    },
    hr:{
        marginTop:'1%',
        margin: theme.spacing(5)
    },
    paperDiv:{
        display : 'flex',
        flexWrap : 'wrap',
        '& > *': {
            marginLeft: theme.spacing(10),
            marginTop: theme.spacing(1),
            width: theme.spacing(25),
            height: theme.spacing(7),
        }
    },
    paper:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        fontSize : 28,
        padding: '2px 20px 0px 20px',
        color: 'white',
        height : '10%',
    }
}))

function Category(){
    const classes = useStyles()

    const [category, setCategory] = useState()

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/categories")
        .then(res => setCategory(res.data))
        .catch(err =>console.log(err))
    },[])

    const categories = category.map((e,index)=>(
        <Paper className={classes.paper} elevation={3} key={index}>{e}</Paper>
    ))
    return(
        <div>
            <Typography className={classes.heading} variant ='h5'>Category</Typography>
            <hr className={classes.hr}/>
            <div className={classes.paperDiv}>
                {categories}
            </div>
        </div>
    )
}

export default Category