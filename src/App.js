import React, {Component, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/styles";
import {Container} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  app: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  loginButton: {
    color: 'whitesmoke'
  }
}));

const App = () => {
  const classes = useStyles();
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className={classes.app}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            osw-react-app
          </Typography>
          <Button className={classes.loginButton} onClick={() => setLoggedIn(!loggedIn)}>Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        {loggedIn ? <h1>Logged in</h1>: <h1>Please log in</h1>}
      </Container>
    </div>
  );
};

export default App;
