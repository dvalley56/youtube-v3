import * as React from "react";
import {
  Stack,
  Popover,
  Button,
  Typography,
  Paper,
  Box,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import { AccountCircleOutlined, TuneOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

import logo from "../assets/test.png";
import { SearchBar } from "./";
import { logInWithGoogle, logOut } from "../utils/firebase";

const Navbar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(undefined);
  };

  const handleCloseWithLogout = () => {
    logOut();
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Stack
      direction="row"
      alignItems="flex-start"
      p={2}
      sx={{
        position: "sticky",
        background: "#111",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} width={70} />
      </Link>
      <SearchBar />

      {props.user == null && (
        <Button onClick={logInWithGoogle} variant="outlined">
          Sign In
        </Button>
      )}
      {props.user != null && (
        <Box>
          <Link to="/upload" style={{ textDecoration: "none" }}>
            <Button
              to="/upload"
              variant="outlined"
              sx={{
                mr: 2,
              }}
            >
              Upload
            </Button>
          </Link>
          <Button
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
            sx={{
              borderRadius: "50%",
              padding: 0,
              minWidth: 0,
            }}
          >
            <img
              src={props.user.photoURL}
              alt="user"
              height={45}
              width={45}
              style={{ borderRadius: "50%" }}
            />
          </Button>
        </Box>
      )}

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          borderRadius: "10px",
        }}
      >
        <Paper sx={{ p: 2, background: "#111", color: "#fff" }}>
          <Typography sx={{ mb: 1 }} variant="h6" component="div">
            {props.user?.displayName}
          </Typography>
          <Typography sx={{ mb: 1 }} variant="body2" component="div">
            {props.user?.email}
          </Typography>

          <Box
            sx={{
              bgColor: "#111",
            }}
          >
            <nav>
              <Divider
                light
                sx={{
                  borderColor: "#e8e8e8",
                }}
              />
              <List
                sx={{
                  textAlign: "left",
                  color: "#fff",
                  background: "#111",
                }}
              >
                <ListItem color="accent" disablePadding>
                  <Button
                    variant="text"
                    sx={{
                      borderRadius: "10px",
                      color: "#fff",
                      background: "#111",
                      width: "100%",
                      justifyContent: "flex-start",
                    }}
                    startIcon={<AccountCircleOutlined />}
                  >
                    Profile
                  </Button>
                </ListItem>
                <ListItem color="accent" disablePadding>
                  <Button
                    variant="text"
                    sx={{
                      borderRadius: "10px",
                      color: "#fff",
                      background: "#111",
                      width: "100%",
                      justifyContent: "flex-start",
                    }}
                    startIcon={<TuneOutlined />}
                  >
                    Setting
                  </Button>
                </ListItem>
              </List>
            </nav>
          </Box>

          <Button
            onClick={handleCloseWithLogout}
            variant="text"
            size="small"
            sx={{
              marginLeft: "auto",
              display: "block",
            }}
          >
            Sign Out
          </Button>
        </Paper>
      </Popover>
    </Stack>
  );
};

export default Navbar;
