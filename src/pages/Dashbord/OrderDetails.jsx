import React from "react";
import { Container, Typography, Box, Button,Input } from "@mui/material";
import Dashboardbar from "../../components/Dashboardbar";
import { Link } from "react-router-dom";

const OrderDetails = () => {

  return (
    <>
      <Dashboardbar />
      <Container maxWidth="xl" style={{ margin: "2rem auto" }}>
        <Box>
          <Typography variant="h6" style={{ fontWeight: "600" }}>
            Order Id: 2020202
          </Typography>
          <Typography variant="body1" style={{ color: "#838383" }}>
            Check all the style profiles associated with this order
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            style={{ fontWeight: "600", marginTop: "1rem" }}
          >
            Order Details
          </Typography>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "600px",
              marginTop: "1rem",
              flexWrap: "wrap",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                style={{ color: "#5AB27E", fontWeight: "600" }}
              >
                Request Date
              </Typography>
              <Typography variant="subtitle1" style={{ color: "#828282" }}>
                23-4-2021
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                style={{ color: "#5AB27E", fontWeight: "600" }}
              >
                Budget
              </Typography>
              <Typography variant="subtitle1" style={{ color: "#B7B94B" }}>
                $320.00
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                style={{ color: "#5AB27E", fontWeight: "600" }}
              >
                Status
              </Typography>
              <Typography variant="subtitle1" style={{ color: "#5372E7" }}>
                Confirmed
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box style={{ margin: "2rem auto" }}>
          <Typography
            variant="h6"
            style={{
              fontWeight: "600",
              borderBottom: "1px solid #C9C9C9",
              paddingBottom: "10px",
            }}
          >
            Style Profiles
          </Typography>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              maxWidth: "700px",
              marginTop: "2rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Box>
              <Typography variant="h6" style={{ fontWeight: "600" }}>
                Style Profile# 1
              </Typography>
              <Typography variant="subtitle1" color="#848484">
                Wedding Style Profile
              </Typography>
            </Box>
            <Link to="/ViewProfile">
              <Button
                variant="contained"
                style={{ background: "#5AB27E", color: "white" }}
              >
                View Style Profile
              </Button>
            </Link>{" "}
            <Button
              variant="outlined"
              style={{ border: "1px solid #5AB27E", color: "#5AB27E" }}
            >
              Add Suggesstions
            </Button>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              maxWidth: "700px",
              marginTop: "2rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Box>
              <Typography variant="h6" style={{ fontWeight: "600" }}>
                Style Profile# 2
              </Typography>
              <Typography variant="subtitle1" color="#848484">
                Wedding Style Profile
              </Typography>
            </Box>
            <Link to="/ViewProfile">
              <Button
                variant="contained"
                style={{ background: "#5AB27E", color: "white" }}
              >
                View Style Profile
              </Button>
            </Link>{" "}
            <Button
              variant="outlined"
              style={{ border: "1px solid #5AB27E", color: "#5AB27E" }}
            >
              Add Suggesstions
            </Button>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              maxWidth: "700px",
              marginTop: "2rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Box>
              <Typography variant="h6" style={{ fontWeight: "600" }}>
                Style Profile# 3
              </Typography>
              <Typography variant="subtitle1" color="#848484">
                Wedding Style Profile
              </Typography>
            </Box>
            <Link to="/ViewProfile">
              <Button
                variant="contained"
                style={{ background: "#5AB27E", color: "white" }}
              >
                View Style Profile
              </Button>
            </Link>
            <Button
              variant="outlined"
              style={{ border: "1px solid #5AB27E", color: "#5AB27E" }}
            >
              Add Suggesstions
            </Button>
          </Box>
        </Box>
      </Container>
     
    </>
  );
};

export default OrderDetails;
