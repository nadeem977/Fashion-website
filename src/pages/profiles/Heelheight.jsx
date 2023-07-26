import React, { useState } from 'react'
import { Box, Container, Typography, Button , } from '@mui/material'
import Dashboardbar from '../../components/Dashboardbar'
import { useMediaQuery } from "@mui/material";
import ft1img from '../../assets/ft1.png'
import ft2img from '../../assets/ft2.png'
import ft3img from '../../assets/ft3.png'
import ft4img from '../../assets/ft4.png'
import { Link } from 'react-router-dom'

const ortstyle = {
  display:'flex',
  flexDirection:'column',
  gap:'10px',
  textAlign:'center',
  borderRadius:'10px',
  cursor:'pointer'
}

const Heelheight = () => {
    const [active, setactive] = useState(null);
    const isLargeS65 = useMediaQuery("(max-width:450px)");
    const isLarge60 = useMediaQuery("(max-width:650px)");
  
    const handleBoxClick = (boxId) => {
      setactive(boxId);
    };
  
    return (
  
      <>
      <Dashboardbar/>
      <Container maxWidth="xl">
        <Box style={{textAlign:'center',marginTop:'5rem'}}>
          <Typography variant="h6" color="#194B2D" fontSize={isLargeS65 ? 25: 40} fontWeight={500}>
          Subdued Or Flaunting? </Typography>
          <Typography variant="body1" color='#848484' fontSize={isLargeS65 ? 17:25} fontWeight={400} >Well, when it comes to heel height, every lady has a preference. </Typography>
        </Box>
      </Container>
  
      <Container maxWidth="xl">
        <Box style={{display:'flex',justifyContent:'center',alignItems:'center',gap: isLarge60 ? '20px': isLargeS65 ? '10px':'80px',flexWrap:'wrap',margin:'3rem auto'}}>
  
       <Box style={ortstyle}  onClick={() => handleBoxClick('boy1')}  sx={{ border: ` ${active === 'boy1' ? '3px solid #5AB27E' : '1px solid #A1A1A1'}`,padding: isLargeS65 ? '1rem':'2rem' }}>
        <img src={ft1img} alt="images" width={isLargeS65 ? '50px':"auto"} />
        <Typography variant="body2"fontSize={15} fontWeight={500}>Flat</Typography>
       </Box>
  
       <Box style={ortstyle} onClick={() => handleBoxClick('boy2')}  sx={{ border: ` ${active === 'boy2' ? '3px solid #5AB27E' : '1px solid #A1A1A1'}` ,padding: isLargeS65 ? '1rem':'2rem' }}>
        <img src={ft2img} alt="images"width={isLargeS65 ? '50px':"auto"} />
        <Typography variant="body2"fontSize={15} fontWeight={500}>Low</Typography>
       </Box>
  
       <Box style={ortstyle} onClick={() => handleBoxClick('boy3')}   sx={{ border: ` ${active === 'boy3' ? '3px solid #5AB27E' : '1px solid #A1A1A1'}`,padding: isLargeS65 ? '1rem':'2rem' }}>
        <img src={ft3img} alt="images" width={isLargeS65 ? '50px':"auto"} />
        <Typography variant="body2"fontSize={15} fontWeight={500}>Medium</Typography>
       </Box>
  
       <Box style={ortstyle} onClick={() => handleBoxClick('boy4')}  sx={{ border: ` ${active === 'boy4' ? '3px solid #5AB27E' : '1px solid #A1A1A1'}`,padding: isLargeS65 ? '1rem':'2rem' }}>
        <img src={ft4img} alt="images" width={isLargeS65 ? '70px':"auto"} />
        <Typography variant="body2"fontSize={15} fontWeight={500}>High</Typography>
       </Box>
      
        </Box>
        <Box  style={{background:'#838383',color:'white',borderRadius:'10px',width:'fit-content',padding:'1rem 4rem',margin:'auto'}}>
        Select your favourite footwear type
        </Box>
        <Box style={{textAlign:'center',margin:'3rem auto 2rem auto'}}>
          <Link to='/ShoeStyle'>
        <Button variant="contained" style={{background:"#5AB27E",width:isLargeS65 ? '80%' :'350px'}}>
          Next
        </Button>
        </Link></Box>
      </Container>
      </>
  
    )
  }

export default Heelheight