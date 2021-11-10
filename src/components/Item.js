import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import accounting from "accounting"
import { maxHeight } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '25vw',
    borderRadius: '10px'
  },
  action: {
    marginTop: "1rem",
  },
  media: {
    paddingTop: "56.25%"
  }
}));


export default function Item(props) {
  const classes = useStyles();
  debugger

  return (
    <Card className={classes.root}>
      <CardHeader
        
        action={
          <Typography 
            variant='h5'
            color="textSecondary">
            {accounting.formatMoney(props.product.price, "€")}
          </Typography>
        }
        title={props.product.model}
        subheader={props.product.brand}
      />
      <CardMedia
        component="img"
        image={props.product.imgUrl}
        alt={props.product.id}
      />

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
  
      </CardActions>
    </Card>
  );
}
