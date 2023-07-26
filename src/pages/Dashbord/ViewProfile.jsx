import React from "react";
import { Container, Box, Typography, Button, Input } from "@mui/material";
import Dashboardbar from "../../components/Dashboardbar";
import nangi from "../../assets/nangi.png";
import grl1 from "../../assets/grl1.png";
import grl2 from "../../assets/grl2.png";
import grl3 from "../../assets/grl3.png";
import { useMediaQuery } from "@mui/material";
import grl4 from "../../assets/grl4.png";
import lshose from '../../assets/lshose.png'
import mshose from '../../assets/mshose.png'
import { Link } from "react-router-dom";

const inputstyles = {
  border: "1px solid #A1A1A1",
  outline: "none",
  padding: "10px",
  borderRadius: "10px",
  width: "120px",
};

const ViewProfile = () => {

  const isLargeS11 = useMediaQuery("(max-width:1150px)");
  const issmall80 = useMediaQuery("(max-width:850px)");
  const issmal45 = useMediaQuery("(max-width:450px)");

  return (
    <>
      <Dashboardbar />
      <Container maxWidth="xl">
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Box style={{ marginTop: "1rem" }}>
            <Typography variant="h6" fontWeight={600}>
              Wedding Style Profile
            </Typography>
            <Typography variant="subtitle1" color="#838383">
              Here’s the complete style profile of the user
            </Typography>
          </Box>
          <Link to='/AddSuggesstion' style={{color:'white',textDecoration:'none'}}>
          <Button variant="contained" style={{ background: "#5AB27E" }}>
            AddSuggesstion
          </Button>
            </Link>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box
          style={{
            marginTop: "3rem",
            display: "flex",
            gap: "20px",
            justifyContent: "space-between",
            flexDirection:isLargeS11?'column':'row'
          }}
        >
          <Box
            style={{
              width:isLargeS11?'100%': "70%",
              border: "1px solid #A6A6A6",
              padding: "1rem",
              borderRadius: "15px",
              paddingBottom: "2rem",
            }}
          >
            <Typography variant="h6">Personal Information</Typography>

            <Box
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <Box style={{ marginTop: "1.5rem",width:issmal45?'100%':'fit-content' }}>
                <Typography variant="h6" fontSize={15} color="#585858">
                  How do you feel?
                </Typography>
                <input
                  style={{
                    border: "1px solid #A1A1A1",
                    outline: "none",
                    padding: "10px",
                    borderRadius: "10px",
                    width:issmal45?'100%':'200px'
                  }}
                />
              </Box>

              <Box style={{ marginTop: "1.5rem" }}>
                <Typography variant="h6" fontSize={15} color="#585858">
                  Height
                </Typography>
                <input
                  placeholder="176 cm"
                  style={{
                    border: "1px solid #A1A1A1",
                    outline: "none",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "100px",
                  }}
                />
              </Box>
              <Box style={{ marginTop: "1.5rem" }}>
                <Typography variant="h6" fontSize={15} color="#585858">
                  Weight
                </Typography>
                <input
                  placeholder="46 kg"
                  style={{
                    border: "1px solid #A1A1A1",
                    outline: "none",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "100px",
                  }}
                />
              </Box>
              <Box style={{ marginTop: "1.5rem" }}>
                <Typography variant="h6" fontSize={15} color="#585858">
                  Eye Color
                </Typography>
                <input
                  placeholder="Purple"
                  style={{
                    border: "1px solid #A1A1A1",
                    outline: "none",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "100px",
                  }}
                />
              </Box>
              <Box style={{ marginTop: "1.5rem" }}>
                <Typography variant="h6" fontSize={15} color="#585858">
                  Hair Color
                </Typography>
                <input
                  placeholder="Black"
                  style={{
                    border: "1px solid #A1A1A1",
                    outline: "none",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "100px",
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            style={{
              width: isLargeS11?'100%':"30%",
              border: "1px solid #A6A6A6",
              padding: "1rem",
              borderRadius: "15px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h6">Body Type</Typography>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#585858",
                  marginTop: "10px",
                  fontWeight: "400",
                }}
              >
                Rectangle
              </Typography>
            </Box>
            <img src={nangi} alt="images" />
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl" style={{ margin: "2rem auto" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            flexDirection:issmall80?'column':'row'
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              border: "1px solid #A6A6A6",
              padding: "1rem",
              borderRadius: "15px",
              width: issmall80?'100%':"40%",
            }}
          >
            <Box style={{ width: "100%" }}>
              <Typography variant="h6" style={{ marginBottom: "2rem" }}>
                Sizes
              </Typography>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <Box>
                  <Typography variant="subtitle1">Tops</Typography>
                  <input type="number" placeholder="24" style={inputstyles} />
                </Box>
                <Box>
                  <Typography variant="subtitle1">Bottoms(Trousers)</Typography>
                  <input type="number" placeholder="24" style={inputstyles} />
                </Box>
                <Box>
                  <Typography variant="subtitle1">Tops</Typography>
                  <input type="number" placeholder="24" style={inputstyles} />
                </Box>
                <Box>
                  <Typography variant="subtitle1">Tops</Typography>
                  <input type="number" placeholder="24" style={inputstyles} />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              border: "1px solid #A6A6A6",
              padding: "1rem",
              borderRadius: "15px",
              width: issmall80?'100%':"56%",
            }}
          >
            <Box>
              <Typography variant="h6" style={{ marginBottom: "2rem" }}>
                Sizes
              </Typography>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <Box>
                  <Typography variant="subtitle1">Neck</Typography>
                  <input type="number" placeholder="24" style={inputstyles} />
                </Box>
                <Box>
                  <Typography variant="subtitle1">Waist</Typography>
                  <input type="number" placeholder="32" style={inputstyles} />
                </Box>
                <Box>
                  <Typography variant="subtitle1">Bust</Typography>
                  <input type="number" placeholder="12" style={inputstyles} />
                </Box>
                <Box>
                  <Typography variant="subtitle1">Hips</Typography>
                  <input type="number" placeholder="12" style={inputstyles} />
                </Box>
                <Box>
                  <Typography variant="subtitle1">Shoulder</Typography>
                  <input type="number" placeholder="12" style={inputstyles} />
                </Box>
                <Box>
                  <Typography variant="subtitle1">Inside leg</Typography>
                  <input type="number" placeholder="12" style={inputstyles} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            flexDirection:issmall80?'column':"row"
            }}>
          <Box style={{ display: "flex", justifyContent: "space-between" ,width:'100%',gap:"10px",flexWrap:'wrap'}}>
            <Box
              style={{
                border: "1px solid #A6A6A6",
                borderRadius: "15px",
                padding: "10px",
                width:issmal45?'100%':'200px',
                height:issmal45?'fit-content':'300px',
                display:'flex',
                flexDirection:'column'
              }}
            >
              <Typography variant="h6">Tops fit</Typography>
              <Box style={{ width: "fit-content", margin: "auto" }}>
                <img src={grl1} alt="images" />
              </Box>
              <Typography variant="subtitle1" color="#A6A6A6" textAlign={'center'}>
                Straight
              </Typography>
            </Box>
            <Box
              style={{
                border: "1px solid #A6A6A6",
                borderRadius: "15px",
                padding: "10px",
                width:issmal45?'100%':'200px',
                height:issmal45?'fit-content':'300px',
                display:'flex',
                flexDirection:'column'
              }}
            >
              <Typography variant="h6">Bottoms fit</Typography>
              <Box style={{ width: "fit-content", margin: "auto" }}>
                <img src={grl2} alt="images" />
              </Box>
              <Typography variant="subtitle1" color="#A6A6A6" textAlign={'center'}>
                Straight
              </Typography>
            </Box>
            <Box
              style={{
                border: "1px solid #A6A6A6",
                borderRadius: "15px",
                padding: "10px",
                width:issmal45?'100%':'200px',
                height:issmal45?'fit-content':'300px',
                display:'flex',
                flexDirection:'column'
              }}
            >
              <Typography variant="h6">Comfortableoutfit</Typography>
              <Box style={{ width: "fit-content", margin: "auto" }}>
                <img src={grl3} alt="images" />
              </Box>
              <Typography variant="subtitle1">Blouse and Skirt</Typography>
              <Typography variant="subtitle1" color="#A6A6A6"textAlign={'center'}>
                Feminine
              </Typography>
            </Box>
            <Box
              style={{
                border: "1px solid #A6A6A6",
                borderRadius: "15px",
                padding: "10px",
                width:issmal45?'100%':'200px',
                height:issmal45?'fit-content':'300px',
                display:'flex',
                flexDirection:'column'
              }}
            >
              <Typography variant="h6">Work wear</Typography>
              <Box style={{ width: "fit-content", margin: "auto" }}>
                <img src={grl4} alt="images" />
              </Box>
              <Typography variant="subtitle1">
                Elegant and Dressed up
              </Typography>
              <Typography variant="subtitle1" color="#A6A6A6" textAlign={'center'}>
                Business Casual
              </Typography>
            </Box>
          </Box>
          <Box style={{width:issmall80? '100%': isLargeS11?'fit-content':'70%',border:'1px solid #A6A6A6',borderRadius:'15px',padding:'1.5rem',  height:'fit-content',margin:issmall80?'auto':'0px'}}>
           <Box>
            <Typography variant="h6">Footwear</Typography>
            <Box style={{display:'flex',justifyContent:'space-between',width:'100%',gap:'10px',flexDirection:isLargeS11?'column':'row'}}>

              <Box style={{display:'flex',flexDirection:'column',gap:'10px'}}>
              <Box style={{background:'#5AB27E',color:'white',width:issmall80?'100%':'254px',padding:'1rem',boxShadow:'0px 4px 28px rgba(0, 0, 0, 0.04)',borderRadius:'10px'}}>
                Footwear characteristic
                <br />Comfort
                </Box>

                <Box style={{width:issmall80?'100%':'254px',padding:'1rem',boxShadow:'0px 4px 28px rgba(0, 0, 0, 0.04)',borderRadius:'10px',border:'1px solid #5AB27E',display:'flex',justifyContent:'space-between'}}>
               <Typography variant="subtitle1"> Heel Height
                <br />Low</Typography>
               <Box> <img src={lshose} alt="images"/></Box>
                </Box>
              </Box>

                <Box style={{width:issmall80?'100%':'254px',padding:'1rem',boxShadow:'0px 4px 28px rgba(0, 0, 0, 0.04)',borderRadius:'10px',border:'1px solid #5AB27E',display:'flex',justifyContent:'space-between',color:'rgb(90, 178, 126)',height: 'fit-content'}}>
               <Typography variant="subtitle1"> Favourite Footwear
                <br />Sneaker</Typography>
                <Box> <img src={mshose} alt="images"/></Box>
                </Box>
            </Box>
           </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ViewProfile;
