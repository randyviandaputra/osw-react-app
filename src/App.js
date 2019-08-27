import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

import {LoginForm} from "./components/LoginForm";
import {Dashboard} from "./components/Dashboard";

export const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  app: {
    flexGrow: 1,
    display: 'flex'
  },
  title: {
    flexGrow: 1
  },
  loginButton: {
    color: 'whitesmoke'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`
  },
}));

const App = () => {
  const classes = useStyles();
  const [loggedIn, setLoggedIn] = useState(false);
  const [sideNavOpen, setSideNavOpen] = useState(false);
  return (
    <div className={classes.app}>
      <AppBar position="absolute" className={`${sideNavOpen && classes.appBarShift}`}>
        <Toolbar>
          {loggedIn && (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setSideNavOpen(!sideNavOpen)}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" className={classes.title}>
            osw-react-app
          </Typography>
          <Button className={classes.loginButton} onClick={() => setLoggedIn(!loggedIn)}>Login</Button>
        </Toolbar>
      </AppBar>
      {loggedIn ? <Dashboard sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen} /> : (
        <Container>
          <LoginForm logIn={() => setLoggedIn(true)}/>
        </Container>
      )}
    </div>
  );
};

export default App;
