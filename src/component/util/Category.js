import { makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'

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
    paperDiv:{
        display : 'flex',
        flexWrap : 'wrap',
        '& > *': {
            marginLeft: theme.spacing(10),
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(3),
            width: theme.spacing(25), 
        },
        padding: '50px 0px 1px',
        
    },
    paper:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        fontSize : 28,
        padding: '2px 20px 0px 20px',
        color: 'white',
        height : '10%',
        transition : 'transform 0.5s',
        '&:hover':{
            transform: 'translateY(-10px)'
        }
    },
    aHref:{
        textDecoration : 'none',
        color: 'white',
    }
}))

function Category(props){
    const classes = useStyles()

    let category = useSelector(state => state.category)
    let categories = null
    if(category){
        categories = category.map((e,index)=>(
            // <Paper className={classes.paper} elevation={3} key={index}>{e}</Paper>
            <Paper className={classes.paper} elevation={3} key={index}><a className={classes.aHref} href={'#'+e}>{e}</a></Paper>
        ))
    }
    return(
        <div data-testid={props.dataTestid}>
            <Typography className={classes.heading} variant ='h5'>Category</Typography>
            <div className={classes.paperDiv}>
                {categories}
            </div>
            <hr className={classes.hr}/>
        </div>
    )
}

export default Category