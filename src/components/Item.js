import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
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
    width: '22vw'
  },
  action: {
    marginTop: "1rem"
  },
  cardHeaderRoot: {
    overflow: "hidden"
  },
  cardHeaderContent: {
    overflow: "hidden"
  }
}));


export default function Item(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        classes={{
          root: classes.cardHeaderRoot,
          content: classes.cardHeaderContent
        }}
        action={
          <Typography 
            variant='h6'
            color="#ed942e">
            {accounting.formatMoney(props.product.price, "€")}
          </Typography>
        }
        title={
          <Typography 
            noWrap gutterBottom
            variant='h6'>
            {props.product.model}
          </Typography>
        }
        subheader={props.product.brand}
      />
      <CardMedia
        component="img"
        style={{padding: '0 35px 35px'}}
        image={props.product.imgUrl}
        alt={props.product.id}
      />

    </Card>
  );
}
