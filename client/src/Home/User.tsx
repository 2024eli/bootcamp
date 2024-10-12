import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Card from '../components/card/Card';

interface CardProps {
  id: string;
  name: string;
  url: string;
  traits: string[];
}

export default function User({ id, name, url, traits }: CardProps) {
  const navigate = useNavigate();

  const onClick = (userId: string) => {
    navigate(`/home/${userId}`, { state: { name, traits } });
  };

  return (
    <Card onClick={() => onClick(id)}>
      <CardMedia sx={{ height: 200 }} image={url} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
