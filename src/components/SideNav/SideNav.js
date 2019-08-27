import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const menuItems = [
  {title: 'Issues', url: ''},
  {title: 'Website settings', url: ''},
  {title: 'Moqups', url: ''},
  {title: 'Users', url: ''},
  {title: 'Wikipedia Watchlists', url: ''},
  {title: 'Wikinews pages', url: ''},
  {title: 'Cron Job Log', url: ''},
  {title: 'Support groups', url: ''},
  {title: 'Contacts', url: ''},
  {title: 'Debts', url: ''},
];

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: 0
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: drawerWidth,
  },
}));

export const SideNav = ({open, setOpen}) => {
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: open ? classes.drawerPaper : classes.drawerPaperClose
      }}
      open={open}
    >
      <List>
        {menuItems.map(item => {
          const {title} = item;
          return (
            <ListItem button key={title}>
              <ListItemText primary={title} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};
