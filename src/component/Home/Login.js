import { CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { activeUser, loginActive, loginError, loginErrorTyping } from '../../Store/Action';
import axios from 'axios';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme)=>({
    btn: {
        margin: theme.spacing(1),
        // marginBottom : '-130px',
    },

    title:{
        margin: theme.spacing(1)
    },
    content:{
        margin: theme.spacing(3),
        marginTop:'-30px',
        height: '180px',
    },
    dialogPaper:{
        maxWidth: '400px',
        maxHeight: '400px',
        minHeight: '370px',
    },
    loader:{
        marginLeft:'40%',
        marginTop:'5%',
    }
}))

function Login(props){
    let history = useHistory()

    //Style
    const classes = useStyles()

    //State and eventHandler
    const[userName, setUserName] = useState('')
    const[password, setPassword] = useState('')
    const[loading, setLoading] = useState(false)
    const[userNameError, setUserNameError] = useState(false)
    const[passwordError, setPasswordError] = useState(false)
    const[loginError,setLoginError] = useState(false)


    const loginHandler = (e)=>{
        e.preventDefault()
        if(userName && password){
            setLoading(true)  // loader
            axios.post("https://fakestoreapi.com/auth/login", {
                username : userName,
                password : password
            })
            .then((res)=>{
                setLoading(false)
                if(res.data.token){
                    localStorage.setItem('token',res.data.token)
                    let activeUser = props.userDetail.filter(e => e.username===userName)
                    if(activeUser[0].password !== password){
                        setPasswordError(true)
                        // props.loginErrorHandler()
                        setLoginError(true)
                    }
                    else{
                        props.activeUser(activeUser)
                        props.loginActiveAction()
                        history.push('/dashboard')
                        // props.loginErrorTypingHandler()
                        setLoginError(false)
                    }
                    console.log(activeUser);
                }
                else{
                    // props.loginErrorHandler()
                    setLoginError(true)
                    setUserNameError(true)
                }
            })
            .catch((err)=>console.log(err))
        }
        else{
            // props.loginErrorHandler()
            setLoginError(true)
        }
        
    }

    const err = loginError? 'error' : null
    // const err = props.loginError? 'error' : null
    const usernameErrorText = userNameError ? 'User not available. Please make yourself Registered' : ''
    const passwordErrorText = passwordError ? 'Incorrect password' : ''
    
    const userNameHandler =(e)=>{
        setUserName(e.target.value)
        // props.loginErrorTypingHandler()
        setLoginError(false)
        setPasswordError(false)
        setUserNameError(false)
    }
    
    const passwordHandler = (e)=>{
        setPassword(e.target.value)
        setLoginError(false)
        // props.loginErrorTypingHandler()
        setPasswordError(false)
        setUserNameError(false)

    }

    const closeLoginHandler = () =>{
        setLoginError(false)
        setPasswordError(false)
        setUserNameError(false)
        props.loginActiveAction()
        setUserName('')
        setPassword('')
    }

    return(
    <div data-testid = {props.dataTestid}>        
        <Dialog data-testid = 'login-div' fullWidth='true' maxWidth ='lg' open={props.loginActive} onClose={closeLoginHandler} classes={{ paperWidthLg: classes.dialogPaper }}>
            <DialogTitle className={classes.title}>Login</DialogTitle>
                <form>
                    <DialogContent className={classes.content}>
                        <TextField
                            error={err}
                            label="User Name"
                            style={{ marginBottom: '20px' }}
                            placeholder = 'User Name'
                            fullWidth
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {userName}
                            onChange = {userNameHandler}
                            helperText = {usernameErrorText}
                        />
                        <TextField
                            error={err}
                            label="Password"
                            style={{ marginTop: 5 }}
                            placeholder = 'password'
                            fullWidth
                            type = 'password'
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {password}
                            onChange = {passwordHandler}
                            helperText = {passwordErrorText}
                        />
                        {loading &&
                            <CircularProgress className={classes.loader} color='secondary' />
                        }
                    </DialogContent>
                    <DialogActions>
                        <Button 
                            variant="contained" 
                            size="medium" 
                            color="primary" 
                            className={classes.btn}
                            onClick = {loginHandler}
                            placeholder = 'login-btn'
                            disabled = {loginError || loading}
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
        // loginError : state.loginError
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        loginActiveAction : ()=>dispatch(loginActive()),
        activeUser : (value)=> dispatch(activeUser(value)),
        // loginErrorHandler : ()=>dispatch(loginError()),
        // loginErrorTypingHandler : () =>dispatch(loginErrorTyping())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)