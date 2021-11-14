import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Detail from '../components/Detail';
import {useLocation} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'antiquewhite'
  }
}))


export default function DetailView(props) {
  const classes = useStyles();
  const [location] = useState(useLocation());

  return (
    <div className={classes.root}>
      <Box pt={12}>
        <Detail productID={location.search.substring(1)} />
      </Box>
    </div>
  );
}