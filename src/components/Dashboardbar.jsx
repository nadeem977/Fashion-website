import React,{useState} from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Tooltip,
  Avatar,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import logo from "../assets/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import avatar from "../assets/avtr.png";
const pages = [
  "Home",
  "For Stylists",
  "Location",
  "How It Works",
  "About Us",
  "Login",
  "Get Started",
];

const settings = ["Profile", "Home", "Dashboard", "OrderDetails","ViewProfile"];

const StyledImg = styled.img`
  @media (max-width: 1100px) {
    width: 150px;
  }
`;
const StyledBox = styled(Box)`
  @media (max-width: 1100px) {
    gap: 10px !important;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #838383;
  display: flex;
  font-size: 16px;
  align-items: center;
`;

const Dashboardbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      position="static"
      style={{
        background: "transparent",
        boxShadow: "none",
        marginTop: "1rem",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link to="/">
              {" "}
              <StyledImg src={logo} alt="logo" />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <img src={logo} alt="logo" width={150} />
          </Typography>
          <StyledBox
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "flex-end",
                gap: "30px",
              },
            }}
          >
            <StyledLink to={"/"}> Home</StyledLink>
            <StyledLink to={"/StylistLogin"}> For Stylists</StyledLink>
            <StyledLink to={"#"}> Location</StyledLink>
            <StyledLink to={"/Howitworks"}> How It Works</StyledLink>
            <StyledLink to={"/About"}> About Us</StyledLink>
          </StyledBox>

          <Box sx={{ flexGrow: 0, margin: "0px 20px" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Link style={{textDecoration:'none',color:'black'}} to={`/${setting}`}>
                  <Typography textAlign="center">
                      {setting}
                    </Typography>
                    </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Dashboardbar;
