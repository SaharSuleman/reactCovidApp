import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';

export default function MediaCard({txt,value,color}) {

  return (
    <Card className='myCard' >
        <CardContent style={{backgroundColor:color}} >
          <Typography gutterBottom variant="h5" component="h2">
            {txt}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         <h1><CountUp  start={1000} end ={value} /></h1> 
            
          </Typography>
        </CardContent>
    
        
    
    </Card>
  );
}
