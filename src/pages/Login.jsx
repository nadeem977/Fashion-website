import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
} from "@mui/material";
import gogle from '../assets/gol.png'
import { useMediaQuery } from "@mui/material";
import  logimg from '../assets/loginimg.png'
import MinaNavbar from "../components/MinaNavbar";
import Footer from "../components/Footer";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  const islarge10 = useMediaQuery("(max-width:1050px)");
  const issmall40 = useMediaQuery("(max-width:450px)");

  return (
    <>
     <MinaNavbar/>
      <Container maxWidth="xl" style={{ margin: "4rem auto" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexDirection: islarge10 ? "column" : "row",}}>
          <Box style={{ width: islarge10 ? "100%" : "50%" ,display:'flex',flexDirection:"column",gap:'30px'}}>
            <Box style={{ margin: "2rem 0px" }}>
              <Typography
                variant="h6"
                style={{
                  fontSize: issmall40 ? "22px" : "35px",
                  fontWeight: "600",
                }}
              >
                Why, Welcome Back
              </Typography>
              <Typography
                variant="subtitle1"
                color="#5AB27E"
                fontWeight={500}
                fontSize={22}
              >
                And yes, you’re just a login away!
              </Typography>
            </Box>

            <Box style={{ width: "100%" }}>
              <Typography variant="subtitle1">Email</Typography>
              <TextField
                id="outlined-basic"
                type="email"
                placeholder="mail@website.com"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Box>
            <Box style={{ width: "100%" }}>
              <Typography variant="subtitle1">Password</Typography>
              <TextField
                id="outlined-basic"
                type="password"
                placeholder="Should be At least 8 characters"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Box>

            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: issmall40 ? "column" : "row",
              }}
            >
              <FormControlLabel
                label="Keep me logged in"
                style={{ color: "#8B8B8B" }}
                control={<Checkbox />}
              />
              <Typography variant="subtitle1" color="#838383">
                Forgot Password?
              </Typography>
            </Box>
            <Button
              variant="contained"
              style={{
                width: "100%",
                padding: "15px",
                background: "#5AB27E",
                fontSize: "18px",
              }}
            >
              Login
            </Button>
           <Box style={{textAlign:"center"}}>
           or
            <Button variant="contained" style={{display:'flex',alignItems:'center',gap:'20px',background:'transparent',color:'#E5792C',border:'1px solid #E5792C',width:"100%",margin:'1rem 0px',padding:'10px',fontSize:'22px'}}>
           <img src={gogle} alt="images" />  Login with Google
            </Button>
            <Typography variant="body1">
          Don’t have an account yet? Signup
          </Typography>
           </Box>
          </Box>

          <Box
            style={{
              width: islarge10 ? "100%" : "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <img src={logimg} alt="images" style={{ width: "100%" }} />
          </Box>
      
        </Box>
      </Container>
      <Footer/>
    </>
  );
};

export default Login;
