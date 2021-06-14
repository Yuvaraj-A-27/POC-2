import { makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme)=>({
    heading:{
        textAlign:'left',
        marginTop:'3%',
        marginLeft : '3%',
        marginRight : '3%',
        fontWeight:'800',
        background: 'linear-gradient(45deg, #2c0ccc 10%, #7665c9 50%)',
        border: 0,
        fontSize: 20,
        borderRadius: 3,
        color: 'white',
        height: 25,
        padding: '10px 30px',
    },
    hr:{
        marginTop:'1%',
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        marginBottom: theme.spacing(4),

    },
    paperDiv:{
        display : 'flex',
        flexWrap : 'wrap',
        '& > *': {
            marginLeft: theme.spacing(10),
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(3),
            width: theme.spacing(25), 
        },
        padding: '0px 0px 30px',
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

    let category = useSelector(state => state.category)
    let categories = null
    if(category){
        categories = category.map((e,index)=>(
            <Paper className={classes.paper} elevation={3} key={index}>{e}</Paper>
        ))
    }
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