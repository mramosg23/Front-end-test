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
    maxWidth: 250,
  },
  action: {
    marginTop: "1rem",
  },
  media: {
    paddingTop: "56.25%"
  }
}));


export default function Item() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        
        action={
          <Typography 
            variant='h5'
            color="textSecondary">
            {accounting.formatMoney(50, "€")}
          </Typography>
        }
        title="Iconia Talk S"
        subheader="Acer"
      />
      <CardMedia
        component="img"
        image="https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg"
        alt="Phone"
      />
      {/* <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>*/}
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
