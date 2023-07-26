import React,{useState} from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { useMediaQuery } from "@mui/material";
import stl from "../assets/stl.png";
import MinaNavbar from "../components/MinaNavbar";
import Footer from "../components/Footer";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const StylistLogin = () => {


  const islarge10 = useMediaQuery("(max-width:1050px)");
  const issmall40 = useMediaQuery("(max-width:450px)");

  const [age, setAge] = useState("Select Country");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
     <MinaNavbar/>
      <Container maxWidth="xl" style={{ margin: "4rem auto" }}>
        <Box style={{ display: "flex", justifyContent: "center", gap: "20px",flexDirection: islarge10 ? 'column':"row" }}>
          <Box style={{ width:islarge10 ? '100%': "50%"}}>
            <Box style={{ margin: "2rem auto" }}>
              <Typography
                variant="h6"
                style={{ fontSize: issmall40 ? '22px':"35px", fontWeight: "600" }}
              >
                Why, Welcome Back
              </Typography>
              <Typography variant="subtitle1" color="#5AB27E" fontWeight={500} fontSize={22}>
                And yes, you’re just a login away!
              </Typography>
            </Box>

            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                margin: "1rem auto",
                flexDirection:issmall40 ? 'column': "row"
              }}
            >
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
            </Box>

            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection:issmall40 ? 'column': "row"
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
              style={{ width: "100%", padding: "15px", background: "#5AB27E",fontSize:'18px' }}
            >
              Login
            </Button>
            <Typography
              variant="h6"
              style={{ fontSize:issmall40? '20px': "30px", fontWeight: "600", marginTop: "20px" }}
            >
              If You’re A Pro Stylists Looking To Join Us—We’re Just As Curious
            </Typography>

            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                margin: "1rem auto",
                flexDirection:issmall40 ? 'column': "row"
              }}
            >
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
                <Typography variant="subtitle1">Name</Typography>
                <TextField
                  id="outlined-basic"
                  type="text"
                  placeholder="Rana Hammad"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Box>
            </Box>
            <Box sx={{ minWidth: 120 }}>
            <Typography variant="subtitle1">Country</Typography>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                  placeholder="Select Country"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                margin: "1rem auto",
                alignItems: "center",
                flexDirection:issmall40 ? 'column': "row"
              }}
            >
              <Box style={{ width: "100%" }}>
                <Typography variant="subtitle1">
                  Linkedin Profile Link
                </Typography>
                <TextField
                  id="outlined-basic"
                  type="url"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Box>
              <Typography variant="subtitle1" style={{ marginTop:issmall40 ? '0px':"1.5rem" }}>
                or
              </Typography>
              <Box style={{ width: "100%" }}>
                <input
                  accept="application/pdf"
                  id="upload-cv"
                  type="file"
                  style={{ display: "none" }}
                />
                <label htmlFor="upload-cv">
                  <Button
                    variant="outlined"
                    component="span"
                    style={{
                      width: "100%",
                      padding: "14px",
                      marginTop:issmall40 ? '0px':"1.5rem",
                      color:'#5AB27E',
                      border:'2px solid #5AB27E'
                    }}
                  >
                    <Typography style={{display:"flex",alignItems:"center",gap:'10px',fontWeight:'600'}}><SaveAltIcon/> Upload CV</Typography>
                  </Button>
                </label>
              </Box>
            </Box>
            <Button
              variant="contained"
              style={{ width: "100%", padding: "15px", background: "#5AB27E",fontSize:'18px' }}
            >
              Sign up
            </Button>
          </Box>

          <Box style={{ width:islarge10? '100%': "50%",display:"flex",alignItems:"center",justifyContent:'center' }}>
            <img src={stl} alt="images" style={{width:'100%'}}/>
          </Box>
        </Box>
      </Container> 
      <Footer/>
    </>
  );
};

export default StylistLogin;
