import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import  MenuIcon from '@material-ui/icons/Menu'
import { loginActive, registerActive } from '../../Store/Action';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop : '-10px',
      top: 0,
    },
    menuButton: {
      marginRight: theme.spacing(16),
    },
    title: {
      flexGrow: 1,
    },
    btn:{
        padding:'0px 10px',
        '&:hover' :{
            backgroundColor:'red',
        }
    },
    loginAnchor:{
        textDecoration: 'none',
        color : 'white',
    }
  }));

function AppBarComponent(props){
    const classes = useStyles()


    return(
        <div data-testid = {props.dataTestid}>
            <AppBar id={props.id} position="sticky" className={classes.root}>
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h5" className={classes.title}>
                    MyStore
                </Typography>
                <Button className = {classes.btn} data-testid='register-btn' color="inherit" onClick= {props.registerActiveHandler}>
                    Register
                </Button>
                <Button className = {classes.btn} data-testid='login-btn' color="inherit" onClick={props.loginActiveHandler}>
                    Login
                </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        loginActiveHandler : () => dispatch(loginActive()),
        registerActiveHandler : ()=>dispatch(registerActive())
    }
}

export default connect(null,mapDispatchToProps)(AppBarComponent);