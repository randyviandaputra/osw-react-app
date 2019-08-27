import React from 'react';
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

import {SideNav} from "../SideNav";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    paddingTop: 88,
  },
}));

export const Dashboard = ({sideNavOpen, setSideNavOpen}) => {
  const classes = useStyles();
  return (
    <>
      <SideNav open={sideNavOpen} setOpen={setSideNavOpen} />
      <main className={classes.content}>
        <Container>
          <Typography variant="h4">
            Dashboard
          </Typography>
        </Container>
      </main>
    </>
  );
};
