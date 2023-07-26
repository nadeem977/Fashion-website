import React from "react";
import { Container, Box, Typography } from "@mui/material";
import abtimg from "../assets/abth.png";
import pln from "../assets/pln.png";
import { useMediaQuery, Button } from "@mui/material";
import Footer from '../components/Footer'
import back from '../assets/back.png'
import styled from "styled-components";
import card1 from '../assets/clt.png'
import card2 from '../assets/del.png'
import tcla from '../assets/tcl.png'
import blue from '../assets/blue.png'
import grlt from '../assets/grlt.png'
import MinaNavbar from "../components/MinaNavbar";

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

const Styledcard1 = styled(Box)`
  background-image: url(${card1});
`;
const Styledcard2 = styled(Box)`
  background-image: url(${card2});
`;
const About = () => {
  const isLargeS12 = useMediaQuery("(max-width:1000px)");
  const ismdediam70 = useMediaQuery("(max-width:740px)");
  const issmall40 = useMediaQuery("(max-width:450px)");


  return (
    <>
     <MinaNavbar/>
     
      <Container maxWidth="xl" style={{ margin: "3rem auto" }}>
        <Box style={{ textAlign: "center" }}>
          <Typography
            variant="h6"
            style={{ fontSize:issmall40? '30px':"46px", fontWeight: "600" }}
          >
            StyleWired
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              fontSize:issmall40? '16px':"26px",
              fontWeight: "500",
              color: "#838383",
              marginBottom: "1rem",
            }}
          >
            Your ultra-fashion & convenience, our super logistics
          </Typography>
        </Box>
        <Box>
          <img src={abtimg} alt="images" style={{ width: "100%" }} />
        </Box>
      </Container>
      <Container maxWidth="xl" style={{ margin: "4rem auto" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "40px",
            flexDirection: isLargeS12 ? "column" : "row",
          }}
        >
          <Box style={{ width: isLargeS12 ? "100%" : "50%" }}>
            <Typography
              variant="h6"
              style={{fontSize:issmall40? '25px':"40px", fontWeight: "600" }}
            >
              Who We Are?
            </Typography>
            <Typography
              variant="subtitle1"
              style={{fontSize:issmall40? '16px':"22px",fontWeight: "500", color: "#838383" }}
            >
              Based in London, UK, we are an internationally-operating fashion
              logistics service— ready to make your travels seamless for you.
              With a background in fashion and tech, we were well aware of the
              pain of on-the-go fashion. From not knowing what outfit to pick to
              packing, lugging, ironing, and washing it, it seems like a
              constant hassle when traveling for occasions. Our solution: make
              it all convenient.
            </Typography>
            <Typography
              variant="subtitle2"
              style={{
                borderBottom: "4px solid #5AB27E",
                width: "250px",
                marginTop: "3rem",
              }}
            ></Typography>
          </Box>
          <Box style={{ width: isLargeS12 ? "100%" : "50%" }}>
            <img src={pln} alt="image" width="100%"/>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl" style={{ margin: "4rem auto" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "40px",
            flexDirection: isLargeS12 ? "column-reverse" : "row",
          }}
        >
           <Box style={{ width: isLargeS12 ? "100%" : "50%" }}>
            <img src={back} alt="image" width="100%" />
          </Box>
          <Box style={{ width: isLargeS12 ? "100%" : "50%" }}>
            <Typography
              variant="h6"
              style={{ fontSize:issmall40? '25px':"40px", fontWeight: "600" }}
            >
             What We Do
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontSize:issmall40? '16px':"22px", fontWeight: "500", color: "#838383",lineHeight:issmall40?'35px':'238.5%' }}
            >
            No more packing outfits for meetings & vacation, no more stress about airport baggage, ironing, and washing. For all your outfit logistics, we’ll take care of it for you. Our online personal stylists will curate your dream outfit selection, then we’ll get it delivered straight to your door. A special stylist delivery service, but so much more.
            </Typography>
            <Typography
              variant="subtitle2"
              style={{
                borderBottom: "4px solid #5AB27E",
                width: "250px",
                marginTop: "3rem",
              }}
            ></Typography>
          </Box>
         
        </Box>
      </Container>
      <Container maxWidth="xl" style={{ margin: "4rem auto" }}>
        <Box style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap:isLargeS12 ? "wrap": 'unset',
          gap: "10px",
        }}>
        <Styledcard1 style={cadsstyle}sx={{width:ismdediam70 ? 'auto': isLargeS12 ?  '40%': "50%",}}>
            <Typography variant="h1" style={{ fontSize: "46px" }}>
            Our Mission
            </Typography>
            <Typography variant="body1" fontSize={22} style={{lineHeight:'205%'}}>
            Embodying your personal style shouldn’t be a pain. It should be a seamless experience of bringing your personality to life; your comfort and charm cared for by textures. At StyleWire, our mission is to make your fashion effortless—for it to be with you without hassle, affordably, and anywhere. 
            </Typography>
          </Styledcard1>
          <Styledcard2 style={cadsstyle} sx={{width:ismdediam70 ? 'auto': isLargeS12 ?  '40%': "50%",}}>
            <Typography variant="h1" style={{ fontSize: "46px" }} > 
            Our Vision
            </Typography>
            <Typography variant="body1" fontSize={22} style={{lineHeight:'205%'}}>
            Emboldened by a grander vision, we see StyleWire as more than a seamless fashion experience. We envision a platform that styles the world, that builds an international fashion community unlike anything ever known
            </Typography>
          </Styledcard2>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box style={{textAlign:'center',margin:"3rem auto"}}>
        <Typography variant="h6" style={{fontSize:'40px',fontWeight:'600'}}>
        Our People
        </Typography>
        </Box>
        <Box style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'10px'}}>
        <Box style={{textAlign:"center",margin:'auto'}}>
          <img src={blue} alt="images"  style={{width:'100%'}}/>
         <Typography variant="h6" style={{color:"#0D406A",margin:"10px 0px",fontSize:"25px",fontWeight:'600'}}>
         Alaxi Thomas
         </Typography>
         <Typography variant="subtitle1" color="#656565">
         Fashion Designer, NY
         </Typography>
        </Box>
        <Box style={{textAlign:"center",margin:'auto'}}>
          <img src={tcla} alt="images" style={{width:'100%'}} />
         <Typography variant="h6" style={{color:"#0D406A",margin:"10px 0px",fontSize:"25px",fontWeight:'600'}}>
         Henry A. Smith
         </Typography>
         <Typography variant="subtitle1" color="#656565">
         Fashion Designer, TX
         </Typography>
        </Box>
        <Box style={{textAlign:"center",margin:'auto'}}>
          <img src={grlt} alt="images" style={{width:'100%'}} />
         <Typography variant="h6" style={{color:"#0D406A",margin:"10px 0px",fontSize:"25px",fontWeight:'600'}}>
         Tanya M. Tye
         </Typography>
         <Typography variant="subtitle1" color="#656565">
         Senior Designer, NY
         </Typography>
        </Box>
        </Box>
        
      </Container>
      <Box style={{textAlign:"center",margin:'4rem auto'}}>
        <Button variant="contained" style={{padding:'10px 50px',background:'#5AB27E'}}>
        Join Stylewired
        </Button>
      </Box>
      <Footer/>
    </>
  );
};

export default About;
