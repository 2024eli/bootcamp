import React, { SetStateAction, useState } from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemIcon,
  Chip,
  Paper,
  TextField,
  Button,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useTheme } from '@mui/material/styles';
import { User } from '../util/types/custom';
import { getData, putData, deleteData, postData, useData } from '../util/api';

interface CreateUserProps {
  setCurrUsers: React.Dispatch<SetStateAction<User[]>>;
}

export default function CreateUser({ setCurrUsers }: CreateUserProps) {
  const [name, setName] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [hometown, setHometown] = useState<string>('');
  const [toxicTrait, setToxicTrait] = useState<string>('');
  const [toxicTraits, setToxicTraits] = useState<string[]>([]);

  const navigate = useNavigate();
  const theme = useTheme();

  const addToxicTrait = () => {
    setToxicTraits((prev) => [toxicTrait, ...prev]);
    setToxicTrait('');
  };

  const addUser = async () => {
    const newUser = {
      id: uuidv4(),
      name,
      traits: toxicTraits,
      url: './empty.jpg', // Assuming this is the default user image
      year,
      hometown,
    };
    try {
      // Adjust postData to send the request properly
      const userResponse = await postData('users/create', newUser);
      console.log(userResponse);
      
      // Set the new user in the state and navigate
      setCurrUsers((prev) => [...prev, newUser]);
      navigate('/home');
    } catch (error) {
      console.error('Error adding user:', error);
    }
    
    // postData('users/create', newUser)
    //   .then((userResponse) => {
    //     setCurrUsers((prev) => [...prev, newUser]);
    //     navigate('/home');
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

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
          maxWidth: 400,
          width: '100%',
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Create New User
        </Typography>
        <Box
          component="form"
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              label="Toxic trait"
              variant="outlined"
              fullWidth
              value={toxicTrait}
              onChange={(e) => setToxicTrait(e.target.value)}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={addToxicTrait}
              startIcon={<AddCircleOutlineIcon />}
            >
              Add
            </Button>
          </Box>
          <List>
            {toxicTraits.map((trait, index) => (
              <ListItem disableGutters>
                <ListItemIcon>
                  <AddCircleOutlineIcon color="secondary" />
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
          <Button
            variant="contained"
            color="primary"
            onClick={addUser}
            startIcon={<PersonAddIcon />}
            disabled={!name.trim() || toxicTraits.length === 0}
          >
            Create User
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
