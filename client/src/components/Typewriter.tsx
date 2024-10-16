import React from 'react';
import { Typography } from '@mui/material';

const useTypewriter = (text: string, speed = 50, pauseDuration = 2000) => {
  const [displayText, setDisplayText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;

    const animateText = () => {
      setDisplayText((current) => {
        if (!isDeleting && current === text) {
          timer = setTimeout(() => setIsDeleting(true), pauseDuration);
          return current;
        }
        if (isDeleting && current === '') {
          setIsDeleting(false);
          return '';
        }
        const nextChar = isDeleting
          ? current.slice(0, -1)
          : text.slice(0, current.length + 1);
        timer = setTimeout(animateText, isDeleting ? speed / 2 : speed);
        return nextChar;
      });
    };

    timer = setTimeout(animateText, speed);

    return () => clearTimeout(timer);
  }, [text, speed, isDeleting, pauseDuration]);

  return displayText;
};

interface TypewriterProps {
  text: string;
  speed?: number;
  pauseDuration?: number;
}

function Typewriter({
  text,
  speed = 50,
  pauseDuration = 2000,
}: TypewriterProps) {
  const displayText = useTypewriter(text, speed, pauseDuration);
  return (
    <Typography variant="h1" align="center" color="grey.700">
      {displayText}
    </Typography>
  );
}

export default Typewriter;
