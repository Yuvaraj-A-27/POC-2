import { Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { createUser, registerActive } from '../../Store/Action';
// import axios from 'axios';
// import { useHistory } from 'react-router';

const useStyles = makeStyles((theme)=>({
    margin: {
        margin: theme.spacing(2),
    },

    title:{
        margin: theme.spacing(1)
    },
    content:{
        margin: theme.spacing(2),
        marginTop:'-30px'
    },
    dialogPaper:{
        maxWidth: '500px',
        maxHeight: '600px',
        minHeight: '600px',
    },
}))

function Register(props){
    // let history = useHistory()

    //Style
    const classes = useStyles()

    //State and eventHandler
    const [register, setRegister] = useState({
        email : '',
        username : '',
        password : '',
        firstname : '',
        lastname : '',
        number : '',
        street : '',
        city : '',
        zipcode : '',
        phone : ''
    })

    const onSubmitHandler = () =>{
        let detail ={
            id: props.userDetail.length + 1,
            email : register.email,
            username:register.username,
            password : register.password,
            name : {
                firstname : register.firstname,
                lastname : register.lastname
            },
            address : {
                city:register.city,
                street : register.street,
                number : register.number,
                zipcode : register.zipcode,
                geolocation:{
                    lat:'-37.3159',
                    long:'81.1496'
                }
            },
            phone :register.phone
        }
        props.createUserHandler(detail)
        // axios.post("https://fakestoreapi.com/users", detail)
        // .then(res => console.log(res))
    }
    // console.log(props.userDetail);
    
    return(
    <div data-tesid={props.dataTestid}>
        <Dialog fullWidth='true' maxWidth ='lg' open={props.registerActive} onClose={props.registerActiveHandler} classes={{ paperWidthLg: classes.dialogPaper }}>
            <DialogTitle className={classes.title}>Register</DialogTitle>
                <form>
                    <DialogContent className={classes.content}>
                        <TextField
                            placeholder="First name"
                            style={{ marginBottom: '10px' }}
                            fullWidth
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {register.firstname}
                            onChange = {(e)=>setRegister({...register, firstname: e.target.value})}
                        />
                        <TextField
                            placeholder="Last Name"
                            style={{ marginBottom: '10px' }}
                            fullWidth
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {register.lastname}
                            onChange = {(e)=>setRegister({...register, lastname:e.target.value})}
                        />
                        <TextField
                            placeholder="Email"
                            style={{ marginBottom: '10px' }}
                            fullWidth
                            type = 'email'
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {register.email}
                            onChange = {(e)=>setRegister({...register, email:e.target.value})}
                        />
                        <TextField
                            placeholder="User Name"
                            style={{ marginBottom: '10px' }}
                            fullWidth
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {register.username}
                            onChange = {(e)=>setRegister({...register, username:e.target.value})}
                        />
                        <TextField
                            placeholder="Password"
                            style={{ marginTop: 2 }}
                            fullWidth
                            type = 'password'
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {register.password}
                            onChange = {(e)=>setRegister({...register, password:e.target.value})}
                        />
                        <TextField
                            placeholder="Door Number"
                            style={{ marginBottom: '10px' }}
                            fullWidth
                            type = "number"
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {register.number}
                            onChange = {(e)=>setRegister({...register, number : e.target.value})}
                        />
                        <TextField
                            placeholder="Street"
                            style={{ marginBottom: '10px' }}
                            fullWidth
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {register.street}
                            onChange = {(e)=>setRegister({...register, street : e.target.value})}
                        />
                        <TextField
                            placeholder="City"
                            style={{ marginBottom: '10px' }}
                            fullWidth
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {register.city}
                            onChange = {(e)=>setRegister({...register, city: e.target.value})}
                        />
                        <TextField
                            label="Zip Code"
                            style={{ marginBottom: '10px' }}
                            fullWidth
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {register.zipcode}
                            onChange = {(e)=>setRegister({...register, zipcode :e.target.value})}
                        />
                        <TextField
                            label="Phone Number"
                            style={{ marginBottom: '10px' }}
                            fullWidth
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {register.phone}
                            onChange = {(e)=>setRegister({...register, phone: e.target.value})}
                        />
                        
                    </DialogContent>
                    <DialogActions>
                        <Button 
                            variant="contained" 
                            size="medium" 
                            color="primary" 
                            className={classes.margin}
                            onClick = {onSubmitHandler}
                        >Register
                        </Button>
                    </DialogActions>
                </form>
        </Dialog>
    </div>
    )
}

const mapStateToProps = state =>{
    return{
        registerActive : state.registerActive,
        userDetail : state.userDetail
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        registerActiveHandler : ()=>dispatch(registerActive()),
        createUserHandler : (value)=> dispatch(createUser(value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)