import { List, ListItemText, makeStyles, SwipeableDrawer, Typography } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { leftNavBarActive } from '../../Store/Action'

const useStyles = makeStyles(()=>({
    list :{
        width : 250,
        marginTop:'10%'
    },
    listItem:{
        marginTop :'7%',
        marginLeft : '15%',
        transition : 'transform 0.3s',
        '&:hover':{
            transform: 'translateY(-5px)'
        }
    },
    aHref:{
        textDecoration : 'none',
        fontSize : 20,
    },
    title:{
        marginLeft: '5%',
        marginBottom : '15%'
    },
}))

function LeftNavBar(props){
    const classes = useStyles()

    return(
        <div >
            <SwipeableDrawer 
            anchor = 'left'
            open ={props.leftNavBarActive}
            onClose = {props.leftNavBarActiveHandler} >
                <List className={classes.list}>
                    <Typography className={classes.title} variant = 'h6'>Product Categories</Typography>
                    {props.category.map((e)=>(
                        <ListItemText className={classes.listItem} key={e}>
                            <a onClick={props.leftNavBarActiveHandler} className={classes.aHref} href={'#'+e}>{e}</a>
                        </ListItemText>
                    ))}
                </List>
            </SwipeableDrawer>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        category : state.category,
        leftNavBarActive : state.leftNavBarActive
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        leftNavBarActiveHandler : () => dispatch(leftNavBarActive())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LeftNavBar)