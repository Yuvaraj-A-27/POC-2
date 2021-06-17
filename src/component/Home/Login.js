import { Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { activeUser, loginActive, loginError, loginErrorTyping } from '../../Store/Action';
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
    dialogPaper:{
        maxWidth: '400px',
        maxHeight: '1800px',
        minHeight: '300px',
    },
}))

function Login(props){
    let history = useHistory()

    //Style
    const classes = useStyles()

    //State and eventHandler
    const[userName, setUserName] = useState('')
    const[password, setPassword] = useState('')


    const loginHandler = (e)=>{
        e.preventDefault()
        if(userName && password){
            axios.post("https://fakestoreapi.com/auth/login", {
                username : userName,
                password : password
            })
            .then((res)=>{
                console.log(res.data.token);
                if(res.data.token){
                    localStorage.setItem('token',res.data.token)
                    let activeUser = props.userDetail.filter(e => e.username===userName)
                    props.activeUser(activeUser)
                    props.loginActiveAction()
                    history.push('/dashboard')
                    props.loginErrorTypingHandler()
                }
                else{
                    props.loginErrorHandler()
                }
            })
            .catch((err)=>console.log(err))
        }
        else{
            props.loginErrorHandler()
        }
        
    }

    const err = props.loginError? 'error' : null

    const userNameHandler =(e)=>{
        setUserName(e.target.value)
        props.loginErrorTypingHandler()
    }
    
    const passwordHandler = (e)=>{
        setPassword(e.target.value)
        props.loginErrorTypingHandler()
    }

    return(
    <div data-testid = {props.dataTestid}>
        <Dialog fullWidth='true' maxWidth ='lg' open={props.loginActive} onClose={props.loginActiveAction} classes={{ paperWidthLg: classes.dialogPaper }}>
            <DialogTitle className={classes.title}>Login</DialogTitle>
                <form>
                    <DialogContent className={classes.content}>
                        <TextField
                            error={err}
                            label="User Name"
                            style={{ marginBottom: '20px' }}
                            fullWidth
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {userName}
                            onChange = {userNameHandler}
                            data-testid = 'login-username'
                        />
                        <TextField
                            error={err}
                            label="Password"
                            style={{ marginTop: 5 }}
                            fullWidth
                            type = 'password'
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {password}
                            onChange = {passwordHandler}
                        />
                        
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
    </div>
    )
}

const mapStateToProps = state =>{
    return{
        loginActive : state.loginActive,
        userDetail : state.userDetail,
        loginError : state.loginError
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        loginActiveAction : ()=>dispatch(loginActive()),
        activeUser : (value)=> dispatch(activeUser(value)),
        loginErrorHandler : ()=>dispatch(loginError()),
        loginErrorTypingHandler : () =>dispatch(loginErrorTyping())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)