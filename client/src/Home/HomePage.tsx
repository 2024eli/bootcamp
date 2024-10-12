import React from 'react';
import { Box, Typography } from '@mui/material';
import ScreenGrid from '../components/ScreenGrid';
import User from './User';
import AddUser from './AddUser';
import { User as UserType } from '../util/types/custom';

interface HomePageProps {
  users: UserType[];
}

function HomePage({ users }: HomePageProps) {
  return (
    <Box sx={{ padding: (theme) => theme.spacing(2) }}>
      <Typography
        variant="h1"
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
        Toxic Traits
      </Typography>
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
