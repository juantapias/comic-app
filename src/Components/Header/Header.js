import React, { Fragment, useContext } from 'react';
import LogoApp from '../../Assets/Image/logo.png'
import { Link } from 'react-router-dom';
//Material components
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
//Global state
import FilterState from '../../Interfaces/Interfaces';

const useStyle = makeStyles((theme) => ({
  root: {
    justifyContent: "space-between",
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.light, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.light, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = () => {
  const classes = useStyle();
  const { setSearch } = useContext(FilterState);

  const handleFilterSearch = (name, value) => {
    setSearch(value)
  }

  return (
    <Fragment>
      <AppBar
        position="fixed"
        color="default"
      >
      <Toolbar className={classes.root}>
        <Link to="/">
          <img src={LogoApp} className="img-fluid logo-app" alt="comic-app"/>
        </Link>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            name="search"
            onChange={(e) => handleFilterSearch(e.target.name, e.target.value)}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Toolbar>
    </AppBar>
  </Fragment>
  );
}

export default Header;