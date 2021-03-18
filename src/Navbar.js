import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
export default function Navbar() {
    const classes = useStyles();
    const navbarStyle = {
        width: "100vw",
        display: "flex",
        justifyContent: "space-around",
        border: "2px solid black"


    }
    return (
      

<div className={classes.root}>
<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      News
    </Typography>
    <Link to = "/"><Typography variant="h6" className={classes.title}>
      Trending
    </Typography></Link>
    <Link to = "/categories"><Typography variant="h6" className={classes.title}>
      Categories
    </Typography></Link>
    <Link to = "/search"><Typography variant="h6" className={classes.title}>
      Search
    </Typography></Link>
  </Toolbar>
</AppBar>
</div>
    )
}
