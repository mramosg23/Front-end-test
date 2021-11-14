import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import accounting from "accounting"


const useStyles = makeStyles((theme) => ({
  root: {
    width: '40vw',
    '@media (min-width: 575.98px)': { 
      width: '22vw'
     }
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
        style={{padding: '0 1rem 1rem'}}
        image={props.product.imgUrl}
        alt={props.product.id}
      />

    </Card>
  );
}
