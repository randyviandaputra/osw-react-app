import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/styles";

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

function App() {
  const classes = useStyles();
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
          <Button className={classes.loginButton}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
