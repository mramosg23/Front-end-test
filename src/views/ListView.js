import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Header from '../components/Header';
import Items from '../components/Items';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'antiquewhite'
  }
}));

export default function ListView(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header/>
      <Box pt={12}>
        <Items/>
      </Box>
    </div>
  );
}