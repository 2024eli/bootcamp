import React from 'react';
import {
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemIcon,
  Paper,
  Chip,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

interface UserState {
  name: string;
  traits: string[];
  url: string;
}

export default function UserPage() {
  const location = useLocation();
  const { name, traits, url } = location.state as UserState;
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: theme.spacing(3),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: theme.spacing(4),
          maxWidth: 600,
          width: '100%',
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: theme.spacing(3),
          }}
        >
          <Avatar
            alt={name}
            src={url}
            sx={{
              width: 100,
              height: 100,
              marginBottom: theme.spacing(2),
              border: `3px solid ${theme.palette.primary.main}`,
            }}
          />
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            {name}&apos;s Toxic Traits
          </Typography>
        </Box>
        <List>
          {traits.map((trait, index) => (
            <ListItem disableGutters>
              <ListItemIcon>
                <FiberManualRecordIcon fontSize="small" color="secondary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Chip
                    label={trait}
                    color="primary"
                    variant="outlined"
                    sx={{
                      borderRadius: '16px',
                      '& .MuiChip-label': {
                        fontWeight: 'bold',
                      },
                    }}
                  />
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
