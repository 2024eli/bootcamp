import React from 'react';
import { CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Card from '../components/card/Card';

export default function AddUser() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/create');
  };

  return (
    <Card onClick={onClick}>
      <CardMedia sx={{ height: 200 }} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Add User
        </Typography>
      </CardContent>
    </Card>
  );
}
