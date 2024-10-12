import React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemIcon,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useLocation } from 'react-router-dom';

interface UserState {
  name: string;
  traits: string[];
}
const apos = "'";

export default function UserPage() {
  const location = useLocation();
  const { name, traits } = location.state as UserState;

  return (
    <Box sx={{ padding: (theme) => theme.spacing(2) }}>
      <Typography
        variant="h4"
        align="center"
        color="grey.700"
        sx={{
          backgroundcolor: 'primary',
          backgroundImage: `linear-gradient(45deg, #5514B4, #FF80FF)`,
          backgroundSize: '100%',
          backgroundRepeat: 'repeat',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 2,
        }}
      >
        {name}
        {apos}s Toxic Traits:
      </Typography>
      <Box display="flex" justifyContent="center">
        <List>
          {traits.map((trait) => (
            <ListItem>
              <ListItemIcon
                sx={{ position: 'relative', top: '1px', left: '30px' }}
              >
                <FiberManualRecordIcon fontSize="inherit" />
              </ListItemIcon>
              <ListItemText primary={trait} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
