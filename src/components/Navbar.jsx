import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  styled,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import { Interests, Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Searchbox = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  justifyContent: "space-between",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Iconsbox = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}));

const Userbox = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {
    display: "flex"
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Socially
        </Typography>
        <Interests sx={{ display: { xs: "block", sm: "none" } }} />
        <Searchbox>
          <InputBase placeholder="Search" />
        </Searchbox>
        <Iconsbox>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" onClick={e => { setOpen(true) }} />
        </Iconsbox>
        <Userbox onClick={e => { setOpen(true) }}><Avatar sx={{ width: 30, height: 30 }} src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Typography variant="span">Harshita</Typography></Userbox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => { setOpen(false) }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
