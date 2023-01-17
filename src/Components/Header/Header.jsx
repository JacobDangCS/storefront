import {AppBar, ToolBar, Typography, ThemeProvider, createTheme} from '@mui/material';

const Header = () => {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#ffff',
      },
      secondary: {
        contrastText: '#000',
      },
    },
  });


  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="static" theme={theme}>
          <ToolBar>
            <Typography variant='h4' className='header' >
              Our Store
            </Typography>
            {}
          </ToolBar>
        </AppBar>
      </ThemeProvider>
    </>
  )
}

export default Header;