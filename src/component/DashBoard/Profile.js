import { Dialog, DialogContent, DialogContentText, DialogTitle, makeStyles } from '@material-ui/core';
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

    console.log(props.activeUserDetail);
    const detail = props.activeUserDetail[0]
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
                    <p><strong>User ID : </strong>{detail.id}</p>
                    <p><strong>Email : </strong>{detail.email}</p>
                    <p><strong>User Name : </strong>{detail.username}</p>
                    <p><strong>First Name : </strong>{detail.name.firstname}</p>
                    <p><strong>Last Name : </strong>{detail.name.lastname}</p>
                    <p><strong>Address : </strong>{detail.address.number}, {detail.address.street}, {detail.address.city}, ZipCode-{detail.address.zipcode}</p>
                    <p><strong>Phone : </strong>{detail.phone}</p>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );

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
