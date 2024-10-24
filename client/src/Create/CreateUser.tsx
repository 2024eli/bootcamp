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
  const [url, setUrl] = useState<string>('');
  const [major, setMajor] = useState<string>('');
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
      name,
      url,
      traits: toxicTraits,
      year,
      hometown,
      major,
    };
    try {
      // 1. Post to the backend to create the user
      const response = await postData('users', newUser);
      // 2. Check if the response contains the created user with an _id
      if (response && response.data && response.data._id) {
        const createdUser = response.data; // Access the user data from the response
        console.log('Created User:', createdUser);
        // 3. Update local state with the new user object, including _id
        setCurrUsers((prev) => [...prev, createdUser]);
        // 4. Navigate to the user page using the new user's ID
        navigate(`/home`);
      } else {
        throw new Error(
          'Failed to create user or response does not contain _id',
        );
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
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
          <TextField
            label="Hometown"
            variant="outlined"
            fullWidth
            value={hometown}
            onChange={(e) => setHometown(e.target.value)}
          />
          <TextField
            label="Year"
            variant="outlined"
            fullWidth
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <TextField
            label="Url"
            variant="outlined"
            fullWidth
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <TextField
            label="Major"
            variant="outlined"
            fullWidth
            value={major}
            onChange={(e) => setMajor(e.target.value)}
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
