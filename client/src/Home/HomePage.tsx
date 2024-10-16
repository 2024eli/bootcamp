import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ScreenGrid from '../components/ScreenGrid';
import User from './User';
import AddUser from './AddUser';
import Typewriter from '../components/Typewriter';
import { User as UserType } from '../util/types/custom';

interface HomePageProps {
  users: UserType[];
}

function HomePage({ users }: HomePageProps) {
  return (
    <Box sx={{ padding: (t) => t.spacing(2) }}>
      <Box
        className="Title"
        sx={{
          height: 150,
        }}
      >
        <Typewriter text="Toxic Traits" />
      </Box>
      <ScreenGrid>
        {users.map((user: any) => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            url={user.url}
            traits={user.traits}
          />
        ))}
        <AddUser />
      </ScreenGrid>
    </Box>
  );
}

export default HomePage;
