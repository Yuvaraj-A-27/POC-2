import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { activeUser, cartActive, leftNavBarActive, profileActive } from '../../Store/Action';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  menu:{
    marginTop:'-440px',
  }
}));

function AppBarComponentDB(props) {
  let history = useHistory()

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(false);


  const logoutHandler = ()=>{
    localStorage.removeItem('token')
    props.activeUserHandler('')
    history.push('/')
  }


  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={anchorEl}
      onClose={()=>setAnchorEl(!anchorEl)}
      className={classes.menu}
    >
      <MenuItem onClick={props.profileActiveHandler}>Profile</MenuItem>
      <MenuItem onClick={props.cartActiveHandler}>Cart</MenuItem>
      <MenuItem onClick = {logoutHandler}>Logout</MenuItem>
    </Menu>
  );


  return (
    <div className={classes.grow} data-testid={props.dataTestid} id = {props.id}>
      <AppBar position="static">
        <Toolbar>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
            >
                    <MenuIcon onClick={props.leftNavBarHandler}/>
            </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            DashBoard - {props.activeUser[0].name.firstname} {props.activeUser[0].name.lastname}
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        onClick={()=>setAnchorEl(!anchorEl)}
                        color="inherit"
                    >
                            <AccountCircle />
                    </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}


const mapStateToProps = state =>{
  return{
    activeUser : state.activeUserDetail
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    activeUserHandler : (value)=>dispatch(activeUser(value)),
    profileActiveHandler : ()=> dispatch(profileActive()),
    cartActiveHandler : () => dispatch(cartActive()),
    leftNavBarHandler : () =>dispatch(leftNavBarActive())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppBarComponentDB)