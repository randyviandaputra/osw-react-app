import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/styles";
import {Container} from "@material-ui/core";

import {LoginForm} from "./components/LoginForm";
import {Dashboard} from "./components/Dashboard";

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
        {loggedIn ? <Dashboard />: <LoginForm logIn={() => setLoggedIn(true)}/>}
      </Container>
    </div>
  );
};

export default App;
