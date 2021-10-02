import React, { createContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import cwLogo from "../assets/cw.jpeg";
import { useAuth } from "../context/AuthContextProvider";
import { Link, useHistory } from "react-router-dom";
import { LocalDiningOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    fontFamily: "Girassol",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    "& span": {
      fontSize: 30,
      color: "wheat",
    },
  },
  appBar: {
    backgroundColor: "#046582",
  },
  logo: {
    width: 40,
  },
  linkStyle: {
    textDecoration: "none",
    color: "black",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let { currentUser, logout } = useAuth();

  //!Just for testing purpose
  // currentUser = {
  //   email: "a@gmailcom",
  // };

  console.log(currentUser);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    logout();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img src={cwLogo} alt="logo" className={classes.logo} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ──── <span>{"<Clarusway IT />"}</span> BLOG ────
          </Typography>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle style={{ fontSize: "40px" }} />
            </IconButton>
            {currentUser?.email ? (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to="/profile" className={classes.linkStyle}>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <Link to="/new-blog" className={classes.linkStyle}>
                  <MenuItem onClick={handleClose}>New Blog</MenuItem>
                </Link>
                <Link to="/login" className={classes.linkStyle}>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Link>
              </Menu>
            ) : (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to="/login" className={classes.linkStyle}>
                  <MenuItem onClick={handleClose}>Login</MenuItem>
                </Link>
                <Link to="/register" className={classes.linkStyle}>
                  <MenuItem onClick={handleClose}>Register</MenuItem>
                </Link>
              </Menu>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
