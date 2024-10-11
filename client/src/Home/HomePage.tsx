import React from 'react';
import { Box, Typography } from '@mui/material';
import ScreenGrid from '../components/ScreenGrid';
import Card from '../components/card/Card';

const users = [
  {
    id: '1',
    name: 'James',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
  },
  {
    id: '2',
    name: 'Khoi',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
  },
  {
    id: '3',
    name: 'Evelyn',
    url: '/evelyn.jpg',
  },
];
function HomePage() {
  return (
    <Box sx={{ padding: (theme) => theme.spacing(2) }}>
      <Typography variant="h1" sx={{ mb: 2 }}>
        Toxic traits
      </Typography>
      <ScreenGrid>
        {users.map((user) => (
          <Card key={user.id} id={user.id} name={user.name} url={user.url} />
        ))}
      </ScreenGrid>
    </Box>
  );
}

export default HomePage;
