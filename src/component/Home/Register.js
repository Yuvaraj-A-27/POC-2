import { Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { createUser, registerActive } from '../../Store/Action';
// import axios from 'axios';
// import { useHistory } from 'react-router';
import Alert from '@material-ui/lab/Alert';

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
    success:{
        color : '#0b9e06'
    }
}))

function Register(props){
    // let history = useHistory()
    const initialState = {
        email : '',
        username : '',
        password : '',
        firstname : '',
        lastname : '',
        number : '',
        street : '',
        city : '',
        zipcode : '',
        phone : '',
    }
    //Style
    const classes = useStyles()

    //State and eventHandler
    const [register, setRegister] = useState(initialState)

    //state for ---> validation stage 1
    const [firstNameError,setFirstNameError] = useState(false)
    const [lastNameError,setlastNameError] = useState(false)
    const [emailError,setEmailError] = useState(false)
    const [userNameError,setUserNameError] = useState(false)
    const [passwordError,setPasswordError] = useState(false)
    const [doorNoError,setDoorNoError] = useState(false)
    const [streetError,setStreetError] = useState(false)
    const [cityError,setCityError] = useState(false)
    const [zipCodeError,setZipCodeError] = useState(false)
    const [phoneNoError,setPhoneNoError] = useState(false)
    const [success, setSuccess] = useState(false)

    //state for --->  validation stage 2
    const [emailErrorTest, setEmailErrorTest] = useState(false)
    const [userNameTest, setUserNameTest] = useState(false)
    const [passwordTest, setPasswordTest] = useState(false)
    const [zipcodeTest, setZipcodeTest] = useState(false) 
    const [phoneNoTest, setPhoneNoTest] = useState(false) 


    //Error Helper text
    const emailhelper = emailErrorTest? 'Invalid Email' : ''
    const userNameHelper = userNameTest? (register.username+' is taken') : ''
    const passwordHelper = passwordTest ? 'Password should contain 8 to 15 characters, atleast 1 UpperCase letter, 1 LowerCase letter, 1 number and 1 Special Character' : ''
    const zipcodeHelper = zipcodeTest? 'Use only number' : ''
    const phoneNoHelper = phoneNoTest? 'Use only number' : ''


    const validation = () =>{
        let firstNameErr = false, lastNameErr = false, doorNoErr = false, streetErr= false, cityErr= false, emailErr= false
        let passwordErr = false, userNameErr = false, zipcodeErr = false, phoneNoErr = false
        if(!register.firstname) {
            setFirstNameError(true)
            firstNameErr = true
        }
        if(!register.lastname) {
            setlastNameError(true)
            lastNameErr = true
        }
        if(!register.number) {
            setDoorNoError(true)
            doorNoErr = true
        }
        if(!register.street) {
            setStreetError(true)
            streetErr = true
        }
        if(!register.city) {
            setCityError(true)
            cityErr = true
        }


        //email
        if(!register.email) {
            setEmailError(true)
            emailErr = true
        }
        else{
            if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(register.email)){
                setEmailErrorTest(true)
                setEmailError(true)
                emailErr = true
            }
        }


        //user name
        if(!register.username) {
            setUserNameError(true)
            userNameErr = true
        }
        else{
            let userNameChecking = props.userDetail.filter(e => e.username === register.username)
            if(userNameChecking[0]){
                setUserNameTest(true)
                setUserNameError(true)
                userNameErr = true
            }
        }
        


        //password
        if(!register.password) {
            setPasswordError(true)
            passwordErr = true
        }
        else{
            if(!register.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){
                setPasswordError(true)
                setPasswordTest(true)
                passwordErr = true
            }
        }



        //zipcode
        if(!register.zipcode) {
            setZipCodeError(true)
            zipcodeErr = true
        }
        else{
            if(!register.zipcode.match(/^[0-9]+$/)){
                setZipCodeError(true)
                setZipcodeTest(true)
                zipcodeErr = true
            }
        }


        //Phone number
        if(!register.phone) {
            setPhoneNoError(true)
            phoneNoErr = true
        }
        else{
            if(!register.phone.match(/^[0-9]+$/)){
                setPhoneNoTest(true)
                setPhoneNoError(true)
                phoneNoErr = true
            }
        }


        // All Set to register validation
        if( (register.firstname && register.lastname && register.username && register.email && register.password && register.number && register.city && register.street && register.zipcode && register.phone) && (!(firstNameErr || lastNameErr || emailErr || userNameErr || passwordErr || doorNoErr || streetErr || cityErr || zipcodeErr || phoneNoErr))){
            return true
        }
        
        return false
    }

    const onSubmitHandler = async() =>{

        const result = await validation()

        if(result){

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
            setRegister(initialState)
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 5000);
        }
    }
    
    const closeHandler = () =>{
        props.registerActiveHandler()

        setRegister(initialState)
        setFirstNameError(false)
        setlastNameError(false)
        setEmailError(false)
        setUserNameError(false)
        setPasswordError(false)
        setDoorNoError(false)
        setStreetError(false)
        setCityError(false)
        setZipCodeError(false)
        setPhoneNoError(false)
        setEmailErrorTest(false)
        setUserNameTest(false)
        setPasswordTest(false)
        setZipcodeTest(false)
        setPhoneNoTest(false)
    }
    // console.log('all set',allSetToRegister);
    
    return(
    <div data-tesid={props.dataTestid}>
        <Dialog fullWidth='true' maxWidth ='lg' open={props.registerActive} onClose={closeHandler} classes={{ paperWidthLg: classes.dialogPaper }}>
            <DialogTitle className={classes.title}>Register</DialogTitle>
                <form>
                    <DialogContent className={classes.content}>
                        <TextField
                            placeholder="First name"
                            label = 'First Name'
                            style={{ marginBottom: '10px' }}
                            fullWidth
                            error = {firstNameError}
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {register.firstname}
                            onChange = {(e)=>{
                                setRegister({...register, firstname: e.target.value})
                                setFirstNameError(false)
                            }}
                        />
                        <TextField
                            placeholder="Last Name"
                            label = 'Last Name'
                            style={{ marginBottom: '10px' }}
                            fullWidth
                            error = {lastNameError}
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {register.lastname}
                            onChange = {(e)=>{
                                setRegister({...register, lastname:e.target.value})
                                setlastNameError(false)
                            }}
                        />
                        <TextField
                            placeholder="Email"
                            label = 'Email'
                            style={{ marginBottom: '10px' }}
                            fullWidth
                            error = {emailError}
                            type = 'email'
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {register.email}
                            onChange = {(e)=>{
                                setRegister({...register, email:e.target.value})
                                setEmailError(false)
                                setEmailErrorTest(false)
                            }}
                            helperText = {emailhelper}
                        />
                        <TextField
                            placeholder="User Name"
                            label = 'User Name'
                            style={{ marginBottom: '10px' }}
                            fullWidth
                            error = {userNameError}
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {register.username}
                            onChange = {(e)=>{
                                setRegister({...register, username:e.target.value})
                                setUserNameError(false)
                                setUserNameTest(false)
                            }}
                            helperText = {userNameHelper}
                        />
                        <TextField
                            placeholder="Password"
                            label = 'Password'
                            style={{ marginTop: 2 }}
                            fullWidth
                            error = {passwordError}
                            type = 'password'
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {register.password}
                            onChange = {(e)=>{
                                setRegister({...register, password:e.target.value})
                                setPasswordError(false)
                                setPasswordTest(false)
                            }}
                            helperText = {passwordHelper}
                        />
                        <TextField
                            placeholder="Door Number"
                            label = 'Door Number'
                            style={{ marginBottom: '10px' }}
                            fullWidth
                            error = {doorNoError}
                            type = "number"
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {register.number}
                            onChange = {(e)=>{
                                setRegister({...register, number : e.target.value})
                                setDoorNoError(false)
                            }}
                        />
                        <TextField
                            placeholder="Street"
                            label = 'Street'
                            style={{ marginBottom: '10px' }}
                            fullWidth
                            error = {streetError}
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {register.street}
                            onChange = {(e)=>{
                                setRegister({...register, street : e.target.value})
                                setStreetError(false)
                            }}
                        />
                        <TextField
                            placeholder="City"
                            label = 'City'
                            style={{ marginBottom: '10px' }}
                            fullWidth
                            error = {cityError}
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {register.city}
                            onChange = {(e)=>{
                                setRegister({...register, city: e.target.value})
                                setCityError(false)
                            }}
                        />
                        <TextField
                           placeholder="Zip Code"
                           label = 'Zip Code'
                            style={{ marginBottom: '10px' }}
                            fullWidth
                            error = {zipCodeError}
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {register.zipcode}
                            onChange = {(e)=>{
                                setRegister({...register, zipcode :e.target.value})
                                setZipCodeError(false)
                                setZipcodeTest(false)
                            }}
                            helperText = {zipcodeHelper}
                        />
                        <TextField
                            placeholder="Phone Number"
                            label = 'Phone Number'
                            style={{ marginBottom: '10px' }}
                            fullWidth
                            error = {phoneNoError}
                            size = 'medium'
                            margin="dense"
                            variant="outlined"
                            value = {register.phone}
                            onChange = {(e)=>{
                                setRegister({...register, phone: e.target.value})
                                setPhoneNoError(false)
                                setPhoneNoTest(false)
                            }}
                            helperText = {phoneNoHelper}
                        />
                        {success &&
                            // <Typography align='center' className = {classes.success}>You are Successfully Registered</Typography>
                            <Alert severity = 'success'>You are Successfully Registered</Alert>
                        }
                    </DialogContent>
                    <DialogActions>
                        <Button 
                            variant="contained" 
                            size="medium" 
                            color="primary" 
                            className={classes.margin}
                            onClick = {onSubmitHandler}
                            disabled = {firstNameError || lastNameError || emailError || userNameError || passwordError ||
                            doorNoError || cityError || zipCodeError || phoneNoError || streetError }
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