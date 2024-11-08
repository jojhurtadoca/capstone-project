import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigation = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" className="padding-desktop header">
      <Toolbar>
        <IconButton
          className="menu-icon-button"
          edge="end"
          color="inherit"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon className="menu-icon" />
        </IconButton>
        <a className="logo" href="/home">
          <img
            src="/assets/images/Asset16@4x.png"
            alt="little lemon logo"
            className="header-logo"
          />
        </a>
        <Box className="desktop-menu">
          <Button color="inherit" onClick={() => navigation("/")} href="#">
            Home
          </Button>
          <Button color="inherit" href="#">
            About
          </Button>
          <Button color="inherit" href="#">
            Menu
          </Button>
          <Button
            color="inherit"
            onClick={() => navigation("/reservation")}
            href="#"
          >
            Reservations
          </Button>
          <Button color="inherit" href="#">
            Order Online
          </Button>
          <Button color="inherit" href="#">
            Login
          </Button>
        </Box>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            className="drawer-menu"
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem button component="a" href="/home">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component="a" href="#">
                <ListItemText primary="About" />
              </ListItem>
              <ListItem button component="a" href="#">
                <ListItemText primary="Menu" />
              </ListItem>
              <ListItem button component="a" href="/reservation">
                <ListItemText primary="Reservations" />
              </ListItem>
              <ListItem button component="a" href="#">
                <ListItemText primary="Order Online" />
              </ListItem>
              <ListItem button component="a" href="#">
                <ListItemText primary="Login" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
