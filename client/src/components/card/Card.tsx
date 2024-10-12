import * as React from 'react';
import { Card as CardMUI } from '@mui/material';

interface CardProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function Card({ onClick, children }: CardProps) {
  return (
    <CardMUI sx={{ width: 200 }} onClick={onClick}>
      {children}
    </CardMUI>
  );
}
