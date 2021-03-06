import * as React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "../assets/logo.png"
import { Badge } from '@mui/material';
import { useStateValue } from '../StateProvider';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundImage: "linear-gradient(to right, #ffbc2f, #e3722f)"
    },
    logo: {
        height: "4rem"
    },
    buttonCart: {
        marginLeft: "auto"
    },
    cartIcon: {

    }
  }));

export default function Header(props) {
  const classes = useStyles();
  const [{cartCount}] = useStateValue();

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar>

          <Link to={{pathname:'/'}} style={{textDecoration: 'none'}}>
            <img alt="logo" className={classes.logo} src={logo}/>
          </Link>

          <Box className={classes.buttonCart}>
            <IconButton aria-label="cart items" color="inherit">
                <Badge badgeContent={cartCount} color="secondary">
                    <ShoppingCartIcon style={{fontSize: '40px'}}></ShoppingCartIcon>
                </Badge>
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
