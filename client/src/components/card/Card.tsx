import * as React from 'react';
import { Card as CardMUI, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from '@mui/material/styles';

interface CardProps {
  onClick: () => void;
  onDelete?: () => void;
  children: React.ReactNode;
}

export default function Card({ onClick, onDelete, children }: CardProps) {
  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the card's onClick from firing
    if (onDelete) {
      onDelete();
    }
  };
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'relative',
        width: 200,
        '&:hover .deleteIcon': {
          opacity: 1,
        },
      }}
    >
      <CardMUI
        sx={{
          width: '100%',
          height: '100%',
        }}
        onClick={onClick}
      >
        {children}
      </CardMUI>
      <IconButton
        className="deleteIcon"
        sx={{
          position: 'absolute',
          top: -16,
          right: -16,
          opacity: 0,
          transition: 'opacity 0.2s',
          backgroundColor: theme.palette.secondary.main,
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
          },
          zIndex: 1,
        }}
        onClick={handleDelete}
        size="small"
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}
