import React from "react";
import { AppBar, Box, Toolbar, IconButton, Typography,
 Menu, MenuItem, Container, Button} from '@mui/material';
import { Menu as MenuIcon} from '@mui/icons-material';
import logo from '../assets/logo.png'
import styled from 'styled-components'
import { Link } from "react-router-dom";



const pages = ['Home', 'For Stylists', 'Dashbord','How It Works','About Us','Login','Get Started'];
// const settings =  ['Home', 'For Stylists', 'Dashbord','How It Works','About Us','Login','Get Started'];;






const StyledImg = styled.img`
  @media (max-width:1100px) {
    width:150px;
  }
`;
const StyledBox = styled(Box)`
  @media (max-width: 1100px) {
    gap: 10px !important;
  }
`;
const StyledLink = styled(Link)`
text-decoration: none;
color:#838383;
display: flex;
font-size: 16px;
align-items:center;
`;


const MinaNavbar = () => {
 

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    // const handleOpenUserMenu = (event) => {
    //   setAnchorElUser(event.currentTarget);
    // };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    // const handleCloseUserMenu = () => {
    //   setAnchorElUser(null);
    // };
  

  return (
    <>
     <AppBar position="static" style={{background:'transparent',boxShadow:"none",marginTop:'1rem'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}>
          <Link to='/'> <StyledImg src={logo} alt="logo"/></Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
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
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}>
           <img src={logo} alt="logo" width={150}/>
          </Typography>
          <StyledBox sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent:'flex-end',gap:'30px'} }}>
           <StyledLink to={'/'}> Home</StyledLink>
           <StyledLink to={'/StylistLogin'}> For Stylists</StyledLink>
           <StyledLink to={'/Dashbord'}> Dashbord</StyledLink>
           <StyledLink to={'/Howitworks'}> How It Works</StyledLink>
           <StyledLink to={'/About'}> About Us</StyledLink>
           <Link to={'/Login'} >  <Button variant="outlined"style={{border: '1px solid #5AB27E',color:'#5AB27E'}}>Login</Button></Link>
           <Link to={'/Signup'} >  <Button variant="contained" style={{background:'#5AB27E'}}>Get Started</Button></Link>
          </StyledBox>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
};

export default MinaNavbar;
