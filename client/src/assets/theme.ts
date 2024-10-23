/**
 * A file for defining the global MUI theme used in the project.
 */
import { createTheme } from '@mui/material/styles';
import 'typeface-hk-grotesk';

// https://github.com/hack4impact/chapter-website-template/blob/main/public/style.css
const theme = createTheme({
  palette: {
    primary: {
      main: '#fbe9e7',
    },
    secondary: {
      main: '#ff5722',
    },
    background: {
      default: '#bf360c',
      paper: '#3e2723',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
      'HK Grotesk',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          letterSpacing: '0.3px',
          lineHeight: '1.5',
        },
        h1: {
          fontWeight: 'bold !important',
        },
        h2: {
          fontSize: '38px !important',
          marginBottom: '32px !important',
        },
        h3: {
          fontWeight: 'bold !important',
          marginBottom: '10px',
        },
        h4: {
          fontWeight: 'bold !important',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: () => ({
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.main,
          boxShadow: '0 8px 16px 0 rgba(0,0,0,0.5)',
          transition: '0.3s',
          '&:hover': {
            boxShadow: '0 16px 32px 0 rgba(89,0,0,0.2)',
          },
          height: '200px',
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#fbe9e7',
        },
      },
      variants: [
        {
          props: { variant: 'h1' },
          style: () => ({
            backgroundcolor: 'primary',
            backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundSize: '100%',
            backgroundRepeat: 'repeat',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
          }),
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: () => ({
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: theme.palette.primary.main,
            },
            '&:hover fieldset': {
              borderColor: theme.palette.secondary.main,
            },
            '&.Mui-focused fieldset': {
              borderColor: theme.palette.secondary.main,
            },
          },
          '& .MuiInputLabel-root': {
            color: theme.palette.secondary.main,
            '&.Mui-focused': {
              color: theme.palette.secondary.main,
            },
          },
          '& .MuiInputBase-input': {
            color: theme.palette.primary.main,
          },
        }),
      },
    },
  },
});

export default theme;
