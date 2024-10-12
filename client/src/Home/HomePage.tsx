import React from 'react';
import { Box, Typography } from '@mui/material';
import ScreenGrid from '../components/ScreenGrid';
import Card from '../components/card/Card';

const users = [
  {
    id: '1',
    name: 'James',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
    traits: [],
  },
  {
    id: '2',
    name: 'Khoi',
    url: '/khoi.jpeg',
    traits: [
      'puts milk before cereal',
      'apple calendar enjoyer',
      'wakes up past 1 pm most weekends',
      'halal fiend',
      'pickleball addict',
    ],
  },
  {
    id: '3',
    name: 'Evelyn',
    url: '/evelyn.jpg',
    traits: [
      'dnd princess',
      'chalant',
      'retail therapy',
      'i can only bribe myself to enter van pelt if i bring a sweet treat w me',
      'doesnt make her bed',
    ],
  },
];
function HomePage() {
  return (
    <Box sx={{ padding: (theme) => theme.spacing(2) }}>
      <Typography variant="h1" textAlign="center" sx={{ mb: 2 }}>
        Toxic Traits
      </Typography>
      <ScreenGrid>
        {users.map((user) => (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            url={user.url}
            traits={user.traits}
          />
        ))}
      </ScreenGrid>
    </Box>
  );
}

export default HomePage;
