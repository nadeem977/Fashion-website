import React, { useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Dashboardbar from "../../components/Dashboardbar";
import { useMediaQuery } from "@mui/material";
import grl1 from "../../assets/wmn1.png";
import grl2 from "../../assets/wmn2.png";
import boy1 from "../../assets/wmn3.png";
import boy2 from "../../assets/wmn4.png";
import { Link } from "react-router-dom";

const ortstyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  textAlign: "center",
  borderRadius: "10px",
  cursor: "pointer",
};

const OutFits = () => {
  const [active, setactive] = useState(null);
  const isLargeS65 = useMediaQuery("(max-width:480px)");
  const isLarge60 = useMediaQuery("(max-width:650px)");

  const handleBoxClick = (boxId) => {
    setactive(boxId);
  };

  return (
    <>
      <Dashboardbar />
      <Container maxWidth="xl">
        <Box style={{ textAlign: "center", marginTop: "5rem" }}>
          <Typography
            variant="h6"
            color="#194B2D"
            fontSize={isLargeS65 ? 25 : 40}
            fontWeight={500}
          >
            When You're Hanging About In Your Free Time, What <br /> Do You Like
            To Wear?{" "}
          </Typography>
          <Typography
            variant="body1"
            color="#848484"
            fontSize={isLargeS65 ? 17 : 25}
            fontWeight={400}
          >
            Not for those special occasions, just your day-to-day.
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="xl">
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: isLarge60 ? "20px" : isLargeS65 ? "10px" : "80px",
            flexWrap: "wrap",
            margin: "3rem auto",
          }}
        >
          <Box style={{ textAlign: "center", width: "fit-content" }}>
            <Box
              style={ortstyle}
              onClick={() => handleBoxClick("boy1")}
              sx={{
                border: ` ${
                  active === "boy1" ? "3px solid #5AB27E" : "1px solid #A1A1A1"
                }`,
                padding: isLargeS65 ? "1rem" : "2rem",
                width: isLargeS65 ? "100px" : "200px",
                height: isLargeS65 ? "fit-content" : "450px",
                margin: "auto",
              }}
            >
              <img
                src={boy1}
                alt="images"
                width={isLargeS65 ? "50px" : "auto"}
                style={{ margin: "auto" }}
              />
            </Box>
            <Typography variant="body2" fontSize={13} fontWeight={500}>
              Leather Jacket and Jeans
            </Typography>
            <Typography variant="subtitle" color={"#A1A1A1"}>
              Edgy
            </Typography>
          </Box>

          <Box style={{ textAlign: "center", width: "fit-content" }}>
            <Box
              style={ortstyle}
              onClick={() => handleBoxClick("boy2")}
              sx={{
                border: ` ${
                  active === "boy2" ? "3px solid #5AB27E" : "1px solid #A1A1A1"
                }`,
                padding: isLargeS65 ? "1rem" : "2rem",
                width: isLargeS65 ? "100px" : "200px",
                height: isLargeS65 ? "fit-content" : "450px",
                margin: "auto",
              }}
            >
              <img
                src={grl1}
                alt="images"
                width={isLargeS65 ? "50px" : "auto"}
                style={{ margin: "auto" }}
              />
            </Box>
            <Typography variant="body2" fontSize={13} fontWeight={500}>
              Blouse and Skirt
            </Typography>
            <Typography variant="subtitle" color={"#A1A1A1"}>
              Feminine
            </Typography>
          </Box>

          <Box style={{ textAlign: "center", width: "fit-content" }}>
            <Box
              style={ortstyle}
              onClick={() => handleBoxClick("boy3")}
              sx={{
                border: ` ${
                  active === "boy3" ? "3px solid #5AB27E" : "1px solid #A1A1A1"
                }`,
                padding: isLargeS65 ? "1rem" : "2rem",
                width: isLargeS65 ? "100px" : "200px",
                height: isLargeS65 ? "fit-content" : "450px",
                margin: "auto",
              }}
            >
              <img
                src={boy2}
                alt="images"
                width={isLargeS65 ? "50%" : "auto"}
                style={{ margin: "auto" }}
              />
            </Box>
            <Typography variant="body2" fontSize={13} fontWeight={500}>
              T-Shirt and Jeans
            </Typography>
            <Typography variant="subtitle" color={"#A1A1A1"}>
              Casual
            </Typography>
          </Box>

          <Box style={{ textAlign: "center", width: "fit-content" }}>
            <Box
              style={ortstyle}
              onClick={() => handleBoxClick("boy4")}
              sx={{
                border: ` ${
                  active === "boy4" ? "3px solid #5AB27E" : "1px solid #A1A1A1"
                }`,
                padding: isLargeS65 ? "1rem" : "2rem",
                width: isLargeS65 ? "100px" : "200px",
                height: isLargeS65 ? "fit-content" : "450px",
                margin: "auto",
              }}
            >
              <img
                src={grl2}
                alt="images"
                width={isLargeS65 ? "50px" : "auto"}
                style={{ margin: "auto" }}
              />
            </Box>
            <Typography variant="body2" fontSize={13} fontWeight={500}>
              Sweater and dress/chino pants
            </Typography>
            <Typography variant="subtitle" color={"#A1A1A1"}>
              Smart Casual
            </Typography>
          </Box>
        </Box>
        <Box style={{ textAlign: "center", margin: "3rem auto 2rem auto" }}>
          <Link to="/ConfortableOutFit">
            <Button
              variant="contained"
              style={{
                background: "#5AB27E",
                width: isLargeS65 ? "80%" : "350px",
              }}
            >
              Next
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default OutFits;
