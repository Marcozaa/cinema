import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { Link } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { LinkOff, ShareRounded } from '@mui/icons-material';
import { ArrowBigRight } from 'tabler-icons-react';

export default function CheckboxListSecondary({locandine}) {
  let navigate = useNavigate();


  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    navigate(`/film/${value.film}`);
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {locandine.length > 0 ? (
      locandine.map(locandina => (

          <ListItem
          onc
            key={locandina}
            secondaryAction={
              <ArrowBigRight
                edge="end"
                onClick={handleToggle(locandina)}                
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${locandina}`}
                  src={locandina.locandina}
                />
              </ListItemAvatar>
              <ListItemText primary={`${locandina.film}`} />
            </ListItemButton>
          </ListItem>

     
      ))
      ): <p>Questa playlist è vuota</p>}
    </List>
  );
}
