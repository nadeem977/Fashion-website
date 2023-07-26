import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Dashboardbar from "../../components/Dashboardbar";
import { useMediaQuery } from "@mui/material";
import back from "../../assets/backs.png";
import front from "../../assets/front.png";
import { Link } from "react-router-dom";

const BodyParts = () => {
  const isLarge50 = useMediaQuery("(max-width:450px)");
  const isLarges10 = useMediaQuery("(max-width:1000px)");
  const isLarg52 = useMediaQuery("(max-width:520px)");

  return (
    <>
      <Dashboardbar />
      <Container maxWidth="xl">
        <Box style={{ marginTop: "5rem" }}>
          <Typography
            variant="h6"
            color="#194B2D"
            fontWeight={500}
            fontSize={isLarge50 ? 28 : 35}
          >
            Full-Coverage Or Semi-Flattering?{" "}
          </Typography>
          <Typography variant="body1" color="#848484">
            Please click on the woman parts you’d like to cover or show.
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="xl" style={{margin:'1rem auto'}}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            margin: "2rem auto",
          }}
        >
          <Box
            style={{
              width: isLarges10 ? "45%" : "40%",
              padding:isLarg52 ? '1rem': "1.5rem",
              border: "1px solid gray",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <img
              src={front}
              alt="images"
              style={{ margin: "auto" ,width: isLarg52 ? '80px':'auto' }} />
            <Typography variant="body1">Front</Typography>
          </Box>

          <Box
            style={{
              width: isLarges10 ? "45%" : "40%",
              padding:isLarg52 ? '10px': "2rem",
              border: "1px solid gray",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <img src={back} alt="images" style={{ margin: "auto",width: isLarg52 ? '80px':'auto' }} />
            <Typography variant="body1">Back</Typography>
          </Box>
        </Box>
        <Link to='/TopStyles'>
          <Button
            variant="contained"
            style={{ background: "#5AB27E", width: isLarg52 ? '100%':'350px'}}
          >
            Next
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default BodyParts;
