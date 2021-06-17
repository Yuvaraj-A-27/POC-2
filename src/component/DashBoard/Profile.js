import { Dialog, DialogContent, DialogContentText, DialogTitle, Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { profileActive } from '../../Store/Action';

const useStyles = makeStyles(()=>({
    dialogPaper:{
        maxWidth: '800px',
        maxHeight: '1800px',
        minHeight: '500px',
    },
    content: {
        marginLeft:'30px',
        marginTop : '-20px'
    }
}))

function Profile(props){
    const classes = useStyles()

    // console.log(props.activeUserDetail);
    const detail = props.activeUserDetail? props.activeUserDetail[0]  : null
    if(detail){
    return(
        <Dialog
        open={props.profileActive}
        onClose={props.profileActiveHandler}
        fullWidth='true'
        maxWidth ='lg'
        classes={{ paperWidthLg: classes.dialogPaper }}
        >
            <DialogTitle>
                <h2>Profile - {detail.name.firstname} {detail.name.lastname}</h2>
            </DialogTitle>
            <DialogContent className={classes.content}>
                <DialogContentText>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <strong data-testid ='userId' >User ID : </strong>
                        </Grid>
                        <Grid item xs={8}>
                            {detail.id}
                        </Grid>
                        <Grid item xs={3}>
                            <strong>Email : </strong>
                        </Grid>
                        <Grid item xs={8}>
                            {detail.email}
                        </Grid>
                        <Grid item xs={3}>
                            <strong>User Name : </strong>
                        </Grid>
                        <Grid item xs={8}>
                            {detail.username}
                        </Grid>
                        <Grid item xs={3}>
                            <strong>First Name : </strong>
                        </Grid><Grid item xs={8}>
                            {detail.name.firstname}
                        </Grid>
                        <Grid item xs={3}>
                            <strong>Last Name : </strong>
                        </Grid>
                        <Grid item xs={8}>
                            {detail.name.lastname}
                        </Grid>
                        <Grid item xs={3}>
                            <strong>Address : </strong>
                        </Grid>
                        <Grid item xs={8}>
                            {detail.address.number}, {detail.address.street}, {detail.address.city}, ZipCode-{detail.address.zipcode}
                        </Grid>
                        <Grid item xs={3}>
                            <strong>Phone : </strong>
                            </Grid>
                        <Grid item xs={8}>
                            {detail.phone}
                        </Grid>
                    </Grid>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
    }
    return null   // to avoid error in testing  --- undefined and null error
}

const mapStateToProps = state =>{
    return{
        profileActive : state.profileActive,
        activeUserDetail : state.activeUserDetail
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        profileActiveHandler : ()=>dispatch(profileActive())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
