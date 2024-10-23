import * as React from 'react';
import Chip from '@mui/joy/Chip';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Card from '../components/card/Card';

interface CardProps {
  _id: string;
  name: string;
  url: string;
  traits: string[];
  year: string;
  hometown: string;
  major: string;
  deleteUser: (user_id: string) => void;
}

export default function User({
  _id,
  name,
  url,
  traits,
  year,
  hometown,
  major,
  deleteUser,
}: CardProps) {
  const navigate = useNavigate();

  const onClick = (userId: string) => {
    console.log(userId);
    navigate(`/home/${userId}`, { state: { name, traits, url } });
  };

  return (
    <Card onClick={() => onClick(_id)} onDelete={() => deleteUser(_id)}>
      <CardMedia sx={{ height: 200 }} image={url} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Chip>{year}</Chip> <Chip>{hometown}</Chip> <Chip>{major}</Chip>
      </CardContent>
    </Card>
  );
}
