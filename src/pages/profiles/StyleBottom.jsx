import React, { useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Dashboardbar from "../../components/Dashboardbar";
import { useMediaQuery } from "@mui/material";
import dimdimg from "../../assets/b1.png";
import dwonimg from "../../assets/b2.png";
import dbaimg from "../../assets/b3.png";
import { Link } from "react-router-dom";
import sidimg from "../../assets/sid.png";

const ortstyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  textAlign: "center",
  borderRadius: "10px",
  cursor: "pointer",
};


const StyleBottom = () => {

    const [active, setactive] = useState(null);
    const isLargeS65 = useMediaQuery("(max-width:480px)");
    const isLarg10 = useMediaQuery("(max-width:1050px)");
    
  const handleBoxClick = (boxId) => {
    setactive(boxId);
  };

  return (
    <>
    <Dashboardbar />
    <Container maxWidth="xl">
      <Box style={{ marginTop: "5rem" }}>
        <Typography
          variant="h6"
          fontSize={isLargeS65 ? 20: 35}
          fontWeight={600}
          color="#194B2D"
        >
        What Style of Bottoms Fit You Best?
        </Typography>
        <Typography
          variant="body1"
          color="#848484"
          fontSize={isLargeS65 ? 15: 20}
          fontWeight={500}
        >
         Do let us know which fit is your most show-stopping.
        </Typography>
      </Box>
    </Container>
    <Container maxWidth="xl">
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gao: "10px",
          flexDirection: isLarg10 ? "column-reverse" : "row",
        }}
      >
        <Box style={{ width:isLarg10 ? '100%':"50%",display:'flex',flexDirection:'column',marginBottom:'2rem' }}>
          <Box
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              margin: "3rem auto",
              height: "fit-content",
            }}
          >
            <Box
              style={ortstyle}
              onClick={() => handleBoxClick("boy1")}
              sx={{
                border: ` ${
                  active === "boy1"
                    ? "3px solid #5AB27E"
                    : "1px solid #A1A1A1"
                }`,
                padding: isLargeS65 ? "10px" : "2rem", margin:'auto'
              }}
            >
              <img
                src={dimdimg}
                alt="images"
                width={isLargeS65 ? "50px" : "100px"}
                style={{ margin: "auto" }}
              />
              <Typography variant="body2" fontSize={ isLargeS65 ? 13:15} fontWeight={500}>
                Diamond
              </Typography>
            </Box>

            <Box
              style={ortstyle}
              onClick={() => handleBoxClick("boy2")}
              sx={{
                border: ` ${
                  active === "boy2"
                    ? "3px solid #5AB27E"
                    : "1px solid #A1A1A1"
                }`,
                padding: isLargeS65 ? "10px" : "2rem",
                margin:'auto',
              }}
            >
              <img
                src={dwonimg}
                alt="images"
                width={isLargeS65 ? "50px" : "100px"}
                style={{ margin: "auto" }}
              />
              <Typography variant="body2"fontSize={ isLargeS65 ? 12:15} fontWeight={500}>
                Inverted Triangle
              </Typography>
            </Box>

            <Box
              style={ortstyle}
              onClick={() => handleBoxClick("boy3")}
              sx={{
                border: ` ${
                  active === "boy3"
                    ? "3px solid #5AB27E"
                    : "1px solid #A1A1A1"
                }`,
                padding: isLargeS65 ? "10px" : "2rem",
                margin:'auto'
              }}
            >
              <img
                src={dbaimg}
                alt="images"
                width={isLargeS65 ? "50px" : "100px"}
                style={{ margin: "auto" }}
              />
              <Typography variant="body2" fontSize={ isLargeS65 ? 13:15} fontWeight={500}>
                Rectangle
              </Typography>
            </Box>
          </Box>

        <Box style={{width:"fit-content",margin:'auto'}}>
        <Link to='/Footwaer'>
            <Button
              variant="contained"
              style={{ background: "#5AB27E", width: isLarg10 ? '250px':"450px" }}
            >
              Next
            </Button>
          </Link>
        </Box>
        </Box>

        <Box style={{ width:isLarg10 ? '100%':"50%",display:'flex' }}>
          <img src={sidimg} alt="ijmages" style={{ width:isLarg10 ? '60%': "100%" ,margin:'auto'}} />
        </Box>
      </Box>
    </Container>
  </>
  )
}

export default StyleBottom