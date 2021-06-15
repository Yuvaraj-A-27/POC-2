import { Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, TextField, useMediaQuery, useTheme } from '@material-ui/core'
import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { loginActive } from '../../Store/Action';
import axios from 'axios';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme)=>({
    margin: {
        margin: theme.spacing(1),
    },

    title:{
        margin: theme.spacing(2)
    },
    content:{
        margin: theme.spacing(3),
        marginTop:'-30px'
    },
    input:{
        marginTop:theme.spacing(2),
        marginRight:theme.spacing(0),
        width: '100%',
        marginLeft:theme.spacing(0)
    }
}))

function Login(props){
    let history = useHistory()


    //Style
    const classes = useStyles()
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


    //State and eventHandler
    const[userName, setUserName] = useState('')
    const[password, setPassword] = useState('')


    const loginHandler = (e)=>{
        e.preventDefault()
        axios.post("https://fakestoreapi.com/auth/login", {
            username : userName,
            password : password
        })
        .then((res)=>{
            localStorage.setItem('token',res.data.token)
            history.push('/dashboard')
            console.log('running');
        })
        .catch((err)=>console.log(err))
    }

    return(
        <Dialog fullScreen={fullScreen} open={props.loginActive} onClose={props.loginActiveAction}>
            <DialogTitle className={classes.title}>Login</DialogTitle>
                <form>
                    <DialogContent className={classes.content}>
                        <TextField 
                            className={classes.input} 
                            label="User Name"
                            variant='outlined'
                            value={userName}
                            onChange = {(e)=>setUserName(e.target.value)}
                        /><br/>
                        <TextField 
                            className={classes.input}
                            type="password" 
                            label="Password" 
                            variant='outlined'
                            value = {password}
                            onChange = {(e)=> setPassword(e.target.value)}
                        /><br/>
                    </DialogContent>
                    <DialogActions>
                        <Button 
                            variant="contained" 
                            size="medium" 
                            color="primary" 
                            className={classes.margin}
                            onClick = {loginHandler}
                        >Login
                        </Button>
                    </DialogActions>
                </form>
        </Dialog>
    )
}

const mapStateToProps = state =>{
    return{
        loginActive : state.loginActive
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        loginActiveAction : ()=>dispatch(loginActive())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)