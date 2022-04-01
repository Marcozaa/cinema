import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { InserisciInPlaylistButton } from './InserisciInPlaylistButton';
import { Link } from 'react-router-dom';
import './movieCardExpand.css'

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Chip } from '@mui/material';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({immagine, isLargeRow, name, setOpen}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Link to={`/film/${name}`}>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      marginRight: '1rem'
    }}>
      
      <img
        component="img"
        src={immagine}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}

        alt="Paella dish"
      />
    
      <CardActions >
        {<IconButton aria-label="add to favorites">
        <FavoriteIcon />

        </IconButton>}
        <IconButton aria-label="share">
        
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
       <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} >
        <CardContent>
          
          <Chip label="Fantascientifico" color='info' size='small' />
          <Chip label="Drammatico" color='info' size='small' />
          
          <InserisciInPlaylistButton name={name}/>
          <Typography>
          </Typography>
        </CardContent>
      </Collapse>
    </div>
    </Link>
  );
}
