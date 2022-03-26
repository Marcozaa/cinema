import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

export default function CheckboxListSecondary({locandine}) {
    console.log(locandine)
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
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
            key={locandina}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(locandina)}
                checked={checked.indexOf(locandina) !== -1}
                
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
              <ListItemText primary={`Line item ${locandina}`} />
            </ListItemButton>
          </ListItem>
     
      ))
      ): <p>Questa playlist è vuota</p>}
    </List>
  );
}
