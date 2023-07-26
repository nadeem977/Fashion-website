import { Box, Container, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import tik from "../assets/tik.png";
import insta from "../assets/insta.png";
import face from "../assets/face.png";
import styled from "styled-components";
import { useMediaQuery } from "@mui/material";

const fotstyled = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};
const StyledLink = styled(Link)`
text-decoration: none;
color:white;
display: flex;
font-size: 20px
align-items:center;
`;

const Footer = () => {
  const issmall40 = useMediaQuery("(max-width:450px)");

  return (
    <Box style={{ background: "#262626" }}>
      <Container maxWidth="xl">
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            alignItems: "center",
            paddingTop: "3rem",
            paddingBottom: "3rem",
            color: "white",
            flexWrap: "wrap",
          }}
        >
          <Box style={fotstyled} sx={{ marginTop: "2rem" }}>
            <Typography variant="h6" style={{ fontWeight: "600" }}>
              More Info
            </Typography>
            <Typography variant="subtitle1">
              <StyledLink>About us</StyledLink>
            </Typography>
            <Typography variant="subtitle1">
              <StyledLink>Features</StyledLink>
            </Typography>
            <Typography variant="subtitle1">
              <StyledLink>Pricing</StyledLink>
            </Typography>
            <Typography variant="subtitle1">
              <StyledLink>Blog</StyledLink>
            </Typography>
            <Typography variant="subtitle1">
              <StyledLink>Contact us</StyledLink>
            </Typography>
          </Box>
          <Box style={fotstyled} sx={{ alignItems: "baseline" }}>
            <Typography variant="h6" style={{ fontWeight: "600" }}>
              Any Questions? Get in Touch
            </Typography>
            <TextField
              multiline
              maxRows={4}
              placeholder="abdullah12@gmail.com"
              style={{
                background: "white",
                borderRadius: "10px",
                width: issmall40 ? "100%" : "350px",
              }}
            />
            <br />
            <Button
              variant="contained"
              style={{ padding: "10px 50px", background: "#5AB27E" }}
            >
              Submit
            </Button>
          </Box>
          <Box style={fotstyled} sx={{ marginTop: "2rem" }}>
            <Typography variant="h6">Locations</Typography>
            <Typography variant="subtitle1">
              <StyledLink>Los Angeles</StyledLink>
            </Typography>
            <Typography variant="subtitle1">
              <StyledLink>Chicago</StyledLink>
            </Typography>
            <Typography variant="subtitle1">
              <StyledLink>Miami</StyledLink>
            </Typography>
            <Typography variant="subtitle1">
              <StyledLink>Houston</StyledLink>
            </Typography>
            <Typography variant="subtitle1">
              <StyledLink>San Jose</StyledLink>
            </Typography>
          </Box>
          <Box style={fotstyled} sx={{ alignItems: "baseline" }}>
              <Typography variant="h6">Follow Us on</Typography>
            <Link to="https://www.facebook.com/" target="_blank"  style={{ textDecoration: "none" }}>
              <Typography
                variant="subtitle1"
                color="#3B5998"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                }}
              >
                <img src={face} alt="image" style={{ width: "20px" }} />
                Facebook
              </Typography>
            </Link>

            <Link to="https://www.instagram.com/"target="_blank"  style={{ textDecoration: "none" }}>
              <Typography
                variant="subtitle1"
                color="#FD5344"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                }}
              >
                <img src={insta} alt="image" style={{ width: "20px" }} />
                Instagram
              </Typography>
            </Link>

            <Link
            target="_blank" 
              to="https://www.tiktok.com/foryou"
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="subtitle1"
                color="#FFFFFF"
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img src={tik} alt="image" style={{ width: "20px" }} />
                Tiktok
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
