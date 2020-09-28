import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
//Material components
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: "#f5f5f5",
    bottom: 0,
    boxShadow: "0 0 5px rgba(0,0,0,.4)",
    position: "fixed",
    width: "100%",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <BottomNavigation
        className={classes.root}
        showLabels
      >
        <BottomNavigationAction component={Link} to="/" label="Issue" icon={<ImportContactsIcon />}/>
        <BottomNavigationAction component={Link} to="/characters" label="Characters" icon={<AssignmentIndIcon /> } />
      </BottomNavigation>
    </Fragment>
  );
}

export default Footer;