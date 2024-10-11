import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { useLocation } from 'react-router-dom';

interface UserState {
  name: string;
  traits: string[];
}

export default function UserPage() {
  const location = useLocation();
  const { name, traits } = location.state as UserState;

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Toxic Traits of {name}:
      </Typography>
      <List>
        {traits.map((trait) => (
          <ListItem>
            <ListItemText primary={trait} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
