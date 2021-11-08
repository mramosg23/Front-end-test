import * as React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "../assets/logo.png"
import { Badge } from '@mui/material';

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

export default function Header() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar>

          <Button aria-label="logo" sx={{ mr: 2 }}>
            <img className={classes.logo} src={logo}/>
          </Button>

          <Box className={classes.buttonCart}>
            <IconButton aria-label="cart items" color="inherit">
                <Badge badgeContent={2} color="secondary">
                    <ShoppingCartIcon style={{fontSize: '40px'}}></ShoppingCartIcon>
                </Badge>
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
