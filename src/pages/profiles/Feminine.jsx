import React, { useState } from 'react'
import { Box, Container, Typography, Button , } from '@mui/material'
import Dashboardbar from '../../components/Dashboardbar'
import { useMediaQuery } from "@mui/material";
import dimdimg from '../../assets/dmnd.png'
import dwonimg from '../../assets/dwn.png'
import dbaimg from '../../assets/dba.png'
import golimg from '../../assets/go.png'
import upimg from '../../assets/up.png'
import ximg from '../../assets/x.png'
import { Link } from 'react-router-dom'

const ortstyle = {
  display:'flex',
  flexDirection:'column',
  gap:'10px',
  textAlign:'center',
  borderRadius:'10px',
  cursor:'pointer'
}

const Feminine = () => {


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
        <Typography variant="h6" color="#194B2D" fontSize={isLargeS65 ? 30: 45} fontWeight={600}>What’s Your Pick, Andrew? </Typography>
        <Typography variant="body1" color='#848484' fontSize={isLargeS65 ? 20: 30} fontWeight={500} >Nice to meet you Andrew. Who would you like to style today?</Typography>
      </Box>
    </Container>

    <Container maxWidth="xl">
      <Box style={{display:'flex',justifyContent:'center',alignItems:'center',gap: isLarge60 ? '20px': isLargeS65 ? '10px':'80px',flexWrap:'wrap',margin:'3rem auto'}}>

     <Box style={ortstyle}  onClick={() => handleBoxClick('boy1')}  sx={{ border: ` ${active === 'boy1' ? '3px solid #5AB27E' : '1px solid #A1A1A1'}`,padding: isLargeS65 ? '1rem':'2rem' }}>
      <img src={dimdimg} alt="images" width={isLargeS65 ? '50px':'auto'}  style={{margin:'auto'}}/>
      <Typography variant="body2"fontSize={15} fontWeight={500}>Diamond</Typography>
     </Box>

     <Box style={ortstyle} onClick={() => handleBoxClick('boy2')}  sx={{ border: ` ${active === 'boy2' ? '3px solid #5AB27E' : '1px solid #A1A1A1'}` ,padding: isLargeS65 ? '1rem':'2rem' }}>
      <img src={dwonimg} alt="images" width={isLargeS65 ? '50px':'auto'}  style={{margin:'auto'}}/>
      <Typography variant="body2"fontSize={15} fontWeight={500}>Inverted Triangle</Typography>
     </Box>

     <Box style={ortstyle} onClick={() => handleBoxClick('boy3')}   sx={{ border: ` ${active === 'boy3' ? '3px solid #5AB27E' : '1px solid #A1A1A1'}`,padding: isLargeS65 ? '1rem':'2rem' }}>
      <img src={dbaimg} alt="images" width={isLargeS65 ? '50px':'auto'}  style={{margin:'auto'}}/>
      <Typography variant="body2"fontSize={15} fontWeight={500}>Rectangle</Typography>
     </Box>

     <Box style={ortstyle} onClick={() => handleBoxClick('boy4')}  sx={{ border: ` ${active === 'boy4' ? '3px solid #5AB27E' : '1px solid #A1A1A1'}`,padding: isLargeS65 ? '1rem':'2rem' }}>
      <img src={golimg} alt="images" width={isLargeS65 ? '50px':'auto'}  style={{margin:'auto'}}/>
      <Typography variant="body2"fontSize={15} fontWeight={500}>Oval</Typography>
     </Box>
     <Box style={ortstyle} onClick={() => handleBoxClick('boy5')}  sx={{ border: ` ${active === 'boy5' ? '3px solid #5AB27E' : '1px solid #A1A1A1'}`,padding: isLargeS65 ? '1rem':'2rem' }}>
      <img src={upimg} alt="images" width={isLargeS65 ? '50px':'auto'}  style={{margin:'auto'}}/>
      <Typography variant="body2"fontSize={16} fontWeight={500}>Triangle</Typography>
     </Box>
     <Box style={ortstyle} onClick={() => handleBoxClick('boy6')}  sx={{ border: ` ${active === 'boy6' ? '3px solid #5AB27E' : '1px solid #A1A1A1'}`,padding: isLargeS65 ? '1rem':'2rem' }}>
      <img src={ximg} alt="images" width={isLargeS65 ? '50px':'auto'}  style={{margin:'auto'}}/>
      <Typography variant="body2"fontSize={16} fontWeight={500}>Hourglass</Typography>
     </Box>

      </Box>
      <Box style={{textAlign:'center',margin:'3rem auto 2rem auto'}}>
        <Link to='/BodyParts'>
      <Button variant="contained" style={{background:"#5AB27E",width:isLargeS65 ? '80%' :'350px'}}>
        Next
      </Button>
      </Link></Box>
    </Container>
    </>
  )
}

export default Feminine