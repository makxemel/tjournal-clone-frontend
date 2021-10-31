import { createTheme } from '@material-ui/core';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4683d9',
    },
  },

  overrides: {
    MuiButton: {
      root: {
        borderRadius: '8px',
        textTransform: 'inherit',
        fontSize: '16px',
        transition: 'none',
        '&:active': {
          boxShadow:
            '0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 0%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%) !important',
          transform: 'translateY(1px)',
        },
      },
      contained: {
        backgroundColor: 'white',
        boxShadow:
          '0 1px 1px rgb(0 0 0 / 15%), 0 2px 5px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 10%), 1px 0 0 rgb(0 0 0 / 10%)',
        '&:hover': {
          backgroundColor: 'white',
          boxShadow:
            '0 1px 1px rgb(0 0 0 / 18%), 0 2px 5px rgb(0 0 0 / 8%), 0 -1px 0 rgb(0 0 0 / 8%), -1px 0 0 rgb(0 0 0 / 8%), 1px 0 0 rgb(0 0 0 / 8%)',
        },
      },
      containedPrimary: {
        backgroundColor: '#4683d9',
        '&:hover': {
          backgroundColor: '#437CCE',
        },
      },
    },
  },
});
