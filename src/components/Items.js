import React, { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
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
  const [loadItems, setLoadItems] = useState(false);
  const classes = useStyles()
  const api = new Api();

  useEffect(() => {
    console.log("Pide items: ");
      api.
        getItems()
        .then((response) => {
            setLoadItems(true)
            setItems(response.data)
      })  
        .catch((err) =>   
            console.log(err));
  }, [loadItems]);

        
  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
          {items.map((product) =>
            <Grid className={classes.item} item xs={3}>
              <Link to={{pathname:'/detail', search: product.id}} style={{textDecoration: 'none'}}>
                <Item key={product.id} product={product}/>
              </Link>
            </Grid>
          )}
      </Grid>
    </Box>
  );
}
