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
import { useState } from 'react';
import { Modal, Button, Group, Badge } from '@mantine/core';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Chip } from '@mui/material';
import { Flex } from '@chakra-ui/react';
import loginRequests from '../LoginRequests';
import axios from '../axiosLogin'

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
  const [opened, setOpened] = useState(false); // Modal state (Triggered by button)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  async function setFilmInSala(){
    const request = await axios.get(loginRequests.inserimentoFilmInSala +
        "?nomeFilm="+ "'" + name+"'" +
        "&sala="+ "'" + sessionStorage.getItem("sala")+"'" +
        "&cinema="+ "'" + sessionStorage.getItem("nomeCinema")+"'" +
        "&data= "+ "'" + new Date().toLocaleDateString() +"'" +
        "&ora='12:23'"
    )
        }

  return (
    
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      marginRight: '1rem'
    }}>
      <Modal // l'utente della sala lo userà per inserire un film nella coda di riproduzione
        opened={opened}
        onClose={() => setOpened(false)}
        title="Inserisci film nella tua sala."
      >
        <h1>Sala {sessionStorage.getItem("sala")}</h1>
      <Flex wrap={'wrap'} gap={'1rem'}>
      <Badge 
            onClick={setFilmInSala}
      size='xl' variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>8:00</Badge>
      <Badge 
      size='xl'  variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>9:00</Badge>
      <Badge size='xl' variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>10:00</Badge>
      <Badge size='xl' variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>11:00</Badge>
      <Badge size='xl' variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>12:00</Badge>
      <Badge size='xl' variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>13:00</Badge>
      <Badge size='xl' variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>14:00</Badge>
      <Badge size='xl' variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>15:00</Badge>
      <Badge size='xl' variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>16:00</Badge>
      <Badge size='xl' variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>17:00</Badge>
      <Badge size='xl' variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>18:00</Badge>
      <Badge size='xl' variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>19:00</Badge>
      <Badge size='xl' variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>20:00</Badge>
      <Badge size='xl' variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>21:00</Badge>
      <Badge size='xl' variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>22:00</Badge>
      <Badge size='xl' variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>23:00</Badge>
      </Flex>
      </Modal>
    <Link to={`/film/${name}`}>
      <img
        component="img"
        src={immagine}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}

        alt="Paella dish"
      />
    </Link>  
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
          {sessionStorage.getItem("salaAdminUser") == null ? (
          <InserisciInPlaylistButton name={name}/>
          ):
          <Button
           onClick={() => setOpened(true)}
          >Inserisci film in sala</Button>
          }
          <Typography>
          </Typography>
        </CardContent>
      </Collapse>
    </div>

  );
}
