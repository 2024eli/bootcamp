import * as React from 'react';
import { Card as CardMUI } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  id: string;
  name: string;
  url: string;
}

export default function Card({ id, name, url }: CardProps) {
  const navigate = useNavigate();

  const onClickHandler = (userId: string) => {
    navigate(`/home/${userId}`);
  };

  return (
    <CardMUI sx={{ maxWidth: 345 }} onClick={() => onClickHandler(id)}>
      <CardMedia sx={{ height: 140 }} image={url} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
    </CardMUI>
  );
}
