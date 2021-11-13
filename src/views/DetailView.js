import React, { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Header from '../components/Header';
import Detail from '../components/Detail';
import {Link, useLocation} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'antiquewhite'
  }
}));

export default function DetailView(props) {
  const classes = useStyles();
  const [location, setLocation] = useState(useLocation());

  return (
    <div className={classes.root}>
      <Header/>
      <Box pt={12}>
        <Detail productID={location.search.substring(1)}/>
      </Box>
    </div>
  );
}