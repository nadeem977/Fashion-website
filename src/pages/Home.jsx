import React, { useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import  MinaNavbar from '../components/MinaNavbar'
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMediaQuery } from "@mui/material";
import img from "../assets/home.png";
import hdr from "../assets/hdr.png";
import img3 from "../assets/img3.png";
import img2 from "../assets/img1.png";
import img1 from "../assets/img2.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import minar from "../assets/minar.png";
import banner from "../assets/banner.png";
import Footer from "../components/Footer";

const StyledBox = styled(Box)`
  width: 100%;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const StyledBox1 = styled(Box)`
  background-image: url(${img1});
  background-position: center;
  background-size: cover;
}
`;
const cardbox2 = {
  borderRadius: "10px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};
const StyledBox2 = styled(Box)`
  background-image: url(${img3});
  background-position: center;
  background-size: cover;
`;
const StyledBox3 = styled(Box)`
  background-image: url(${img2});
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  width: 90%;
  height: 562px;
  padding: 2rem;
  display: flex;
  gap: 40px;
  flex-direction: column;
  justify-content: space-evenly;
`;
const StyledTypography = styled(Typography)`
  font-size: 60px;
`;

const cadsstyle = {
  backgroundPosition: "center",
  backgroundSize: " cover",
  borderRadius: "10px",
  color: "white",
  padding:"2rem",
  display: "flex",
  gap: "10px",
  flexDirection: "column",
  justifyContent: "space-evenly",
  textAlign: "center",
};
const StyledBaner = styled(Box)`
  background-image: url(${banner});
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  height: 574px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  color: white;
`;
const Styledcard1 = styled(Box)`
  background-image: url(${card1});
`;
const Styledcard2 = styled(Box)`
  background-image: url(${card2});
`;
const Styledcard3 = styled(Box)`
  background-image: url(${card3});
`;
const Styledcard4 = styled(Box)`
  background-image: url(${card4});
`;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Chicago",
  "islamabad",
  "New York",
  "Texas",
  "San Jose",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const namesselct = ["Lahore", "islamabad", "faslabad", "krachi"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Home = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [personNames, setPersonNames] = React.useState([]);
  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonNames(value);
  };

  const isLargeS12 = useMediaQuery("(max-width:1150px)");
  const ismdediam70 = useMediaQuery("(max-width:740px)");
  const issmall40 = useMediaQuery("(max-width:450px)");

  return (
    <>
     <MinaNavbar/>
      <StyledBox variant="div">
        <Container maxWidth="xl" style={{ height: "100%",paddingTop:"5rem" ,paddingBottom:'5rem'}}>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: isLargeS12 ? "column" : "row",
              gap: "10px",
              height: "100%",
            }}
          >
            <Box
              style={{
                width: isLargeS12 ? "100%" : "50%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop:isLargeS12 ?'3rem':'0px'
              }}
            >
              <Box>
                <StyledTypography
                  variant="h1"
                  style={{
                    fontSize: issmall40 ?  '25px': ismdediam70 ? '35px':"60px",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  Your On-The-Go Fashion Made{" "}
                  <span style={{ color: "#5AB27E" }}>
                    Absolutely Effortless
                  </span>
                </StyledTypography>
                <Typography
                  variant="subtitle1"
                  color="white"
                  style={{ width:issmall40? '100%': "430px" }}
                >
                  Whether you’re zipping to a business meeting, going on
                  vacation or whatever your occasion is, we take care of your
                  outfit styling & logistics for you to dress and impress – all
                  within your budget
                </Typography>
                <Button variant="contained" style={{ background: "#5AB27E",marginTop:'1rem' }}>
                  Get Started
                </Button>
              </Box>
            </Box>
            <Box
              style={{
                width: isLargeS12 ? "80%" : "50%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: isLargeS12 ? "30px auto" : "0px",
              }}
            >
              <img src={hdr} alt="images" style={{ width: "90%" }} />
            </Box>
          </Box>
        </Container>
      </StyledBox>
      <Box style={{ margin: "4rem auto" }}>
        <Typography
          variant="h3"
          style={{ fontSize: "48px", fontWeight: "600", textAlign: "center" }}
        >
          Getting Started Right Now is Easy
        </Typography>
      </Box>
      <Container maxWidth="xl">
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: isLargeS12 ? "column" : "row",
            gap: "10px",
          }}
        >
          <Box
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <StyledBox1
              style={cardbox2}
              sx={{ width: isLargeS12 ? "auto" : "600px" , height:ismdediam70 ? 'auto':'250px',padding:issmall40 ? '1rem':'2rem'}}
            >
              <Box style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="h1"
                  style={{ fontSize: "34px", color: "white" }}
                >
                  Your Choice, Our Curated Style
                </Typography>
                <Typography
                  variant="h6"
                  style={{ opacity: "0.5", fontSize: "34px", color: "white" }}
                >
                  01
                </Typography>
              </Box>
              <Typography variant="subtitle1" color="white" style={{}}>
                Find it hard to pick the perfect outfit for the occasion?
                Juggling your style choices while deciding on one hundred other
                things? At StyleWire, our pro-stylists will take care of it for
                you. Tell us your occasion, take our style quiz—then let our
                pros hand-pick everything.
              </Typography>
            </StyledBox1>
            <StyledBox2
              style={cardbox2}
              sx={{ width: isLargeS12 ? "auto" : "600px",height:ismdediam70 ? 'auto':'250px',padding:issmall40 ? '1rem':'2rem' }}
            >
              <Box style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="h1"
                  style={{ fontSize: "34px", color: "white" }}
                >
                  Delivered Impeccably To Any Location
                </Typography>
                <Typography
                  variant="h6"
                  style={{ opacity: "0.5", fontSize: "34px", color: "white" }}
                >
                  02
                </Typography>
              </Box>
              <Typography variant="subtitle1" color="white">
                No more extra luggage, no more wrinkle-fears—we’ll deliver your
                outfit in the absolute best condition, right to any location of
                yours. Saving you time, hassle, and fashionista nightmares.
              </Typography>
            </StyledBox2>
          </Box>
          <StyledBox3>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="h1"
                style={{ fontSize: "34px", color: "white" }}
              >
                Delivered Impeccably To Any Location
              </Typography>
              <Typography
                variant="h6"
                style={{ opacity: "0.5", fontSize: "34px", color: "white" }}
              >
                03
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="subtitle1"
                color="white"
                style={{ maxWidth: "500px" }}
              >
                Once your occasion is over and you’re back in your
                bathrobes—there’s no need to think about your outfit again.
                We’ll wash it for you, caringly pack it away, and deliver it
                back home to you if it was already yours.
              </Typography>
              <Button
                variant="contained"
                style={{
                  background: "#E5B12C",
                  marginTop: "2rem",
                  width: issmall40 ? "100%" : "339px",
                }}
              >
                Get Started
              </Button>
            </Box>
          </StyledBox3>
        </Box>
      </Container>
      <Box style={{ margin: "4rem auto" }}>
        <Typography
          variant="h3"
          style={{ fontSize: "38px", fontWeight: "600", textAlign: "center" }}
        >
          Because There’s No Need To Wait For Those Red-Carpet Moments
        </Typography>
      </Box>
      <Container maxWidth="xl" style={{ margin: "4rem auto" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap:isLargeS12 ? "wrap": 'unset',
            gap: "10px",
          }}>
          <Styledcard1 style={cadsstyle}sx={{width:ismdediam70 ? 'auto': isLargeS12 ?  '40%': "20%",}}>
            <Typography variant="h1" style={{ fontSize: "26px" }}>
              No More Fashion Stress
            </Typography>
            <Typography variant="body1" fontSize={22}>
              Stay true to your fashion vision, our professional stylists will
              handpick outfits for you.{" "}
            </Typography>
          </Styledcard1>
          <Styledcard2 style={cadsstyle} sx={{width:ismdediam70 ? 'auto': isLargeS12 ?  '40%': "20%",}}>
            <Typography variant="h1" style={{ fontSize: "26px" }}>
              Ending Your Luggage Woes
            </Typography>
            <Typography variant="body1" fontSize={22}>
              Carry less stuff, skip the airport fuss. And why even bother about
              another booking class?{" "}
            </Typography>
          </Styledcard2>
          <Styledcard3 style={cadsstyle}sx={{width:ismdediam70 ? 'auto': isLargeS12 ?  '40%': "20%",}}>
            <Typography variant="h1" style={{ fontSize: "26px" }}>
              Any Occasion, Any Location
            </Typography>
            <Typography variant="body1" fontSize={22}>
              Whenever you are, we’ll deliver your outfits to your hotel, home,
              business office, or lounge.{" "}
            </Typography>
          </Styledcard3>
          <Styledcard4 style={cadsstyle} sx={{width:ismdediam70 ? 'auto': isLargeS12 ?  '40%': "20%",}}>
            <Typography variant="h1" style={{ fontSize: "26px" }}>
              Look Amazing Every Time
            </Typography>
            <Typography variant="body1" fontSize={22}>
              We’re wrinkle-allergic, so we make sure it never happens.{" "}
            </Typography>
          </Styledcard4>
        </Box>
      </Container>
      <Container maxWidth="xl" style={{ margin: "6rem auto" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            flexDirection:isLargeS12 ? 'column':'row'
          }}
        >
          <Box style={{ width: isLargeS12 ? '100%':"50%" }}>
            <Typography
              variant="h3"
              style={{ fontSize: "40px", fontWeight: "600" }}
            >
              Where Will Your Next Occasion Be?
            </Typography>
            <Typography
              variant="subtitle1"
              color="#838383"
              fontSize={20}
              style={{ maxWidth: "600px" }}
            >
              Heading to a big exec meeting? Made plans for a tropical getaway?
              Whatver city you’ll envelop your vibe with, we’ll make sure the
              perfect outfit greets you
            </Typography>
            <FormControl
              sx={{
                m: 1,
                width: isLargeS12 ? '100%': "90%",
                border: "1.5px solid #5AB27E",
                borderRadius: "5px",
                mt: 3,
              }}
            >
              <Select
                multiple
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>Select City</em>;
                  }

                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="" style={{ outline: "none" }}>
                  <em>Select City</em>
                </MenuItem>
                {namesselct.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <br />
            <FormControl
              sx={{
                m: 1,
                minWidth: 120,
                width: isLargeS12 ? '100%': "90%",
                boxShadow: "0px 4px 90px rgba(0, 0, 0, 0.08)",
              }}
            >
              <Select
                multiple
                native
                value={personNames}
                onChange={handleChangeMultiple}
                inputProps={{
                  id: "select-multiple-native",
                }}
                style={{ padding: "10px" }}
              >
                {names.map((name) => (
                  <option
                    key={name}
                    value={name}
                    style={{
                      borderBottom: "1px solid #B4B4B4",
                      padding: "15px",
                    }}
                  >
                    {name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box style={{ width:isLargeS12? '100%': "50%" }}>
            <img src={minar} alt="images" style={{ width: "100%" }} />
          </Box>
        </Box>
      </Container>
      <Box style={{ margin: "4rem auto" }}>
        <Typography
          variant="h3"
          style={{ fontSize: "48px", fontWeight: "600", textAlign: "center" }}
        >
          Stylewired is convenient and affordable. Make the most of your trip.
        </Typography>
      </Box>
      <Container maxWidth="xl" style={{ margin: "4rem auto" }}>
        <Box>
          <Accordion
            style={{
              margin: "1rem auto",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>How can i get started on stylewire?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim at
                enim phasellus et, sed. Eget nulla at ut dolorpraesent. Amet
                pellentesque non in sodales. Aliquet ut enim semper nibh arcu,
                faucibus lectus faucibus.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              margin: "1rem auto",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>How can i get started on stylewire?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim at
                enim phasellus et, sed. Eget nulla at ut dolorpraesent. Amet
                pellentesque non in sodales. Aliquet ut enim semper nibh arcu,
                faucibus lectus faucibus.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              margin: "1rem auto",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>How can i get started on stylewire?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim at
                enim phasellus et, sed. Eget nulla at ut dolorpraesent. Amet
                pellentesque non in sodales. Aliquet ut enim semper nibh arcu,
                faucibus lectus faucibus.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
      <Container maxWidth="xl" style={{ margin: "4rem auto" }}>
        <StyledBaner>
          <Typography
            variant="h6"
            style={{ fontSize: isLargeS12 ? '30px':"40px", fontWeight: "600" }}
          >
            When Ultra-Convenience Meets On-The-Go A La Mode
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ fontSize: isLargeS12 ? '17px':"25px", fontWeight: "600" }}
          >
            Ushering in a new kind of stylist service, we handle every outfit
            A-Zs—from <br /> picking out outfits to getting it delivered and
            cleaned
          </Typography>
          <Button
            variant="contained"
            style={{ background: "#5AB27E", padding: "8px 50px" }}
          >
            JOIN NOW
          </Button>
        </StyledBaner>
      </Container>
      <Footer/>
    </>
  );
};

export default Home;
