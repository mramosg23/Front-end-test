import React, { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Api from '../services/Api.js';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import { Typography } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import accounting from "accounting"
import { actionTypes } from '../reducer.js';
import { useStateValue } from '../StateProvider.js';


const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
        padding: theme.spacing(2)
    },
    imageContainer:{
        textAlign: 'center'
    },
    image:{
        padding: '1rem',
        width: '20vw'
    },
    listItem:{
        textAlign: 'center',
        display: 'initial'
    },
    addBasket:{
        width: '100%',
        color: 'white'
    }
}));


export default function Detail(props) {
    const [item, setItem] = useState("");
    const [loadItem, setLoadItem] = useState(false);
    const [color, setColor] = React.useState('');
    const [storage, setStorage] = useState('');
    const [addToCart, setAddToCart] = useState(false);
    const [, dispatch] = useStateValue();
    const classes = useStyles()
    const api = new Api();

    const handleChangeColors = (event) => {
        setColor(event.target.value);
        if(storage !== ''){
            setAddToCart(true)
        }
    };
    
    const handleChangeStorage = (event) => {
        setStorage(event.target.value);
        if(color !== ''){
            setAddToCart(true)
        }
    };

    const addToBasket = () => {

        let data = {
            "id": item.id,
            "colorCode": color,
            "storageCode": storage
        }

        api.addToCart(data)
        .then((response) => {
            dispatch({
                type: actionTypes.ADD_ITEM,
                cartCount: response.data.count
            })
        })
        .catch((err) =>   
            console.log(err));
    }

    useEffect(() => {
        console.log("Pide item: ");
        api.getDetail(props.productID)
        .then((response) => {
            setLoadItem(true)
            setItem(response.data)
        })  
        .catch((err) =>   
            console.log(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadItem]);
        
  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={2} sm={2}>
            <Link to={{pathname:'/'}} style={{textDecoration: 'none'}}>
                <ArrowBackIcon style={{fontSize: '40px'}} color="primary"/>
            </Link>
        </Grid>
        <Grid item xs={8} sm={4}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <Paper className={classes.imageContainer}>
                    <img alt="photoMobile" className={classes.image} src={item.imgUrl} />
                </Paper>
            </Grid>

            <Grid item xs={6} sm={6}>
                <Paper>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel>Color</InputLabel>
                        <Select
                            labelId="select-label-color"
                            id="select-label-color"
                            value={color}
                            label="colores"
                            onChange={handleChangeColors}
                            >
                            {item.options?.colors.map((color, index) =>
                            <MenuItem key={index} value={color.code}>{color.name}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </Box>
                </Paper>
            </Grid>

            <Grid item xs={6} sm={6}>
                <Paper>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel>Almacenamiento</InputLabel>
                        <Select
                            labelId="select-label-storage"
                            id="select-label-storage"
                            value={storage}
                            label="almacenamiento"
                            onChange={handleChangeStorage}
                            >
                            {item.options?.storages.map((storage, index) =>
                            <MenuItem key={index} value={storage.code}>{storage.name}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </Box>
                </Paper>
            </Grid>

            <Grid item xs={12} sm={12}>
                    <Button onClick={addToBasket} className={classes.addBasket} 
                            disabled={!addToCart}
                            variant="contained">Añadir al carrito  
                            <ShoppingCartIcon></ShoppingCartIcon>
                    </Button>
            </Grid>
            </Grid>
        </Grid>
        <Grid item xs={2} display={{ sm: "none"}}/>
        <Grid item xs={2} display={{ sm: "none"}}/>
        <Grid item xs={8} sm={4}>
         <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <Paper className={classes.imageContainer}>
                        <Typography pt={1} variant='h4'>
                            {item.model}
                        </Typography>
                        <Typography variant='h5'  color="#ed942e">
                            {accounting.formatMoney(item.price, "€")}
                        </Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemIcon style={{textAlign: 'center', display: 'initial'}}>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Marca: '+item.brand} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon style={{textAlign: 'center', display: 'initial'}}>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={'CPU: '+item.cpu} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon style={{textAlign: 'center', display: 'initial'}}>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={'RAM: '+item.ram} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon style={{textAlign: 'center', display: 'initial'}}>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={'OS: '+item.os} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon style={{textAlign: 'center', display: 'initial'}}>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Resolución: '+item.displaySize} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon style={{textAlign: 'center', display: 'initial'}}>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Bateria: '+item.battery} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon style={{textAlign: 'center', display: 'initial'}}>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Cámara: '+item.primaryCamera} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon style={{textAlign: 'center', display: 'initial'}}>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Cámara Sec.: '+item.secondaryCmera} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon style={{textAlign: 'center', display: 'initial'}}>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Dimensiones: '+item.dimentions} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon style={{textAlign: 'center', display: 'initial'}}>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Peso: '+item.weight} />
                    </ListItem>
                </List>
                </Paper>
            </Grid>
         </Grid>
        </Grid>
        <Grid item xs={2} sm={2}/>
      </Grid>
    </Box>
  );
}
