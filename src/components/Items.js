import React, { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Item from './Item';
import Api from '../services/Api.js';


const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
        padding: theme.spacing(2)
    },
    item:{
        display: 'flex',
        justifyContent: 'center'
    }
}));




export default function Items(props) {
    const [items, setItems] = useState([]);
    const classes = useStyles()
    debugger
    const api = new Api();

    useEffect(() => {
        debugger 
        console.log("Pide items: ");
        api.
        getItems()
        .then((response) => {
            debugger
            setItems(response.data)
        })  
        .catch((err) =>   
            console.log(err));
    }, [items]);
        
  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
          {items.map((product, index) =>
            <Grid className={classes.item} item xs={3}>
                <Item key={index} product={product}/>
            </Grid>
          )}
      </Grid>
    </Box>
  );
}
