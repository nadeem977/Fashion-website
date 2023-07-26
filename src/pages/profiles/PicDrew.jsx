import React, { useState } from 'react'
import { Box, Container, Typography, Button , } from '@mui/material'
import Dashboardbar from '../../components/Dashboardbar'
import { useMediaQuery } from "@mui/material";
import grl1 from '../../assets/grl-1.png'
import grl2 from '../../assets/grl-2.png'
import boy1 from '../../assets/boy-1.png'
import boy2 from '../../assets/boy-2.png'
import { Link } from 'react-router-dom'

const ortstyle = {
  display:'flex',
  flexDirection:'column',
  gap:'10px',
  textAlign:'center',
  borderRadius:'10px',
  cursor:'pointer'
}

const PicDrew = () => {
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
      <img src={boy1} alt="images" width={isLargeS65 ? '50px':"auto"} />
      <Typography variant="body2"fontSize={20} fontWeight={600}>Man</Typography>
     </Box>

     <Box style={ortstyle} onClick={() => handleBoxClick('boy2')}  sx={{ border: ` ${active === 'boy2' ? '3px solid #5AB27E' : '1px solid #A1A1A1'}` ,padding: isLargeS65 ? '1rem':'2rem' }}>
      <img src={grl1} alt="images"width={isLargeS65 ? '50px':"auto"} />
      <Typography variant="body2"fontSize={20} fontWeight={600}>Woman</Typography>
     </Box>

     <Box style={ortstyle} onClick={() => handleBoxClick('boy3')}   sx={{ border: ` ${active === 'boy3' ? '3px solid #5AB27E' : '1px solid #A1A1A1'}`,padding: isLargeS65 ? '1rem':'2rem' }}>
      <img src={boy2} alt="images" width={isLargeS65 ? '50px':"auto"} />
      <Typography variant="body2"fontSize={20} fontWeight={600}>Man</Typography>
     </Box>

     <Box style={ortstyle} onClick={() => handleBoxClick('boy4')}  sx={{ border: ` ${active === 'boy4' ? '3px solid #5AB27E' : '1px solid #A1A1A1'}`,padding: isLargeS65 ? '1rem':'2rem' }}>
      <img src={grl2} alt="images" width={isLargeS65 ? '70px':"auto"} />
      <Typography variant="body2"fontSize={20} fontWeight={600}>Girl</Typography>
     </Box>

      </Box>
      <Box style={{textAlign:'center',margin:'3rem auto 2rem auto'}}>
        <Link to='/Feminine'>
      <Button variant="contained" style={{background:"#5AB27E",width:isLargeS65 ? '80%' :'350px'}}>
        Next
      </Button>
      </Link></Box>
    </Container>
    </>

  )
}

export default PicDrew