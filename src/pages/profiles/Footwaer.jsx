import React, { useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Dashboardbar from "../../components/Dashboardbar";
import Checkbox from "@mui/material/Checkbox";
import footwearimg from "../../assets/footwear.png";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const Footwaer = () => {
    const isLargeG10 = useMediaQuery("(max-width:1000px)");
    const isLargeL45 = useMediaQuery("(max-width:450px)");

  const [ischeck, setIscheck] = useState("");
  const [activeButton, setActiveButton] = useState("");

  const handleCheckboxChange = (checkboxId) => {
    setIscheck(checkboxId);
    setActiveButton(checkboxId);
  };

  return (
    <>
      <Dashboardbar />
      <Container maxWidth="xl">
           <Box style={{marginTop:'5rem'}}>
          <Typography variant="h6" color="#194B2D" fontSize={isLargeL45 ? 20:35}>Now Let’s Talk Shoes. What’s Most Important <br /> To Get Your Feet Into?</Typography>
          <Typography variant="body2" color="#848484" fontSize={ isLargeL45 ? 15:18}>Select the first characteristic when you think about footwear</Typography>
           </Box>
        </Container>
      <Container maxWidth="xl">
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
            margin: "3rem auto",
            flexDirection: isLargeG10 ? 'column':'row'
          }}
        >
          <Box
            style={{
              width:isLargeG10 ? '100%': "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "30px",
                width: isLargeG10 ? '100%':'auto',
              }}
            >
              <Checkbox
                style={{ color: "#5AB27E" }}
                onClick={() => handleCheckboxChange("check1")}
                checked={ischeck === "check1"}
              />
              <Button
                variant={`${
                  activeButton === "check1" ? "contained" : "outlined"
                }`}
                color="success"
                style={{
                  width:isLargeG10? '80%': "350px",
                  background: activeButton === "check1" ? "#5AB27E" : " ",
                }}
              >
                Comfort
              </Button>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "30px",
                width: isLargeG10 ? '100%':'auto',
              }}
            >
              <Checkbox
                style={{ color: "#5AB27E" }}
                onClick={() => handleCheckboxChange("check2")}
                checked={ischeck === "check2"}
              />
              <Button
                variant={`${
                  activeButton === "check2" ? "contained" : "outlined"
                }`}
                color="success"
                style={{
                    width:isLargeG10? '80%': "350px",
                  background: activeButton === "check2" ? "#5AB27E" : " ",
                }}
              >
                Style
              </Button>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "30px",
                width: isLargeG10 ? '100%':'auto',
              }}
            >
              <Checkbox
                style={{ color: "#5AB27E" }}
                onClick={() => handleCheckboxChange("check3")}
                checked={ischeck === "check3"}
              />
              <Button
                variant={`${
                  activeButton === "check3" ? "contained" : "outlined"
                }`}
                color="success"
                style={{
                    width:isLargeG10? '80%': "350px",
                  background: activeButton === "check3" ? "#5AB27E" : " ",
                }}
              >
                Quality
              </Button>
            </Box>
                <Link to='/Heelheight' style={{width:isLargeG10 ? '90%':'410px',marginLeft:'10px'}}>
              <Button variant="contained" style={{ background:"#5AB27E",width:'100%'}} >Next</Button>
               </Link>
          </Box>

          <Box style={{ width:isLargeG10 ? '100%': "50%" }}>
            <img src={footwearimg} alt="images" width="100%" />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Footwaer;
