import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export default function ActionAreaCard({image,title,overview}) {
    // Reduce overview's length
    if(overview.length > 100){
        overview = overview.substring(0, 100);
        overview += '...'
    }
   
  let navigate = useNavigate();

  function navigateToRoute(){
    navigate("/film/"+title, { replace: true });
    window.location.reload(true)
  }
 
  return (
    <Card sx={{ maxWidth: 345, minWidth: '20rem' }}>
      <CardActionArea>

        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
          onClick={navigateToRoute}
        />
    
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize: '1.4rem', fontWeight: '400'}}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
