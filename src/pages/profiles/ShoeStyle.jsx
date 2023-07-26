import React, { useState } from 'react'
import { Box, Container, Typography, Button , } from '@mui/material'
import Dashboardbar from '../../components/Dashboardbar'
import { useMediaQuery } from "@mui/material";
import ft1img from '../../assets/fts1.png'
import ft2img from '../../assets/fts2.png'
import ft3img from '../../assets/fts3.png'
import ft4img from '../../assets/fts4.png'
import ft5img from '../../assets/fts5.png'
import ft6img from '../../assets/fts6.png'
import { Link } from 'react-router-dom'

const ortstyle = {
  display:'flex',
  flexDirection:'column',
  gap:'10px',
  textAlign:'center',
  borderRadius:'10px',
  cursor:'pointer'
}


const ShoeStyle = () => {


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
          What’s Your Preferred Shoe Style? </Typography>
          <Typography variant="body1" color='#848484' fontSize={isLargeS65 ? 17:25} fontWeight={400} >We know it’s hard to pick, but if you had to, which one? </Typography>
        </Box>
      </Container>
  
      <Container maxWidth="xl">
        <Box style={{display:'flex',justifyContent:'center',alignItems:'center',gap: isLarge60 ? '20px': isLargeS65 ? '10px':'80px',flexWrap:'wrap',margin:'3rem auto'}}>
  
       <Box style={ortstyle}  onClick={() => handleBoxClick('boy1')}  sx={{ border: ` ${active === 'boy1' ? '3px solid #5AB27E' : '1px solid #A1A1A1'}`,padding: isLargeS65 ? '1rem':'2rem' }}>
        <img src={ft1img} alt="images" width={isLargeS65 ? '50px':"auto"} style={{marginBottom: isLargeS65 ? 'auto':'2rem'}}/>
        <Typography variant="body2"fontSize={15} fontWeight={500}>Flat Shoes</Typography>
       </Box>
       <Box style={ortstyle} onClick={() => handleBoxClick('boy2')}  sx={{ border: ` ${active === 'boy2' ? '3px solid #5AB27E' : '1px solid #A1A1A1'}` ,padding: isLargeS65 ? '1rem':'2rem' }}>
        <img src={ft2img} alt="images"width={isLargeS65 ? '50px':"auto"}  style={{margin:'auto'}}/>
        <Typography variant="body2"fontSize={15} fontWeight={500}>Heeled Shoes</Typography>
       </Box>
  
       <Box style={ortstyle} onClick={() => handleBoxClick('boy3')}   sx={{ border: ` ${active === 'boy3' ? '3px solid #5AB27E' : '1px solid #A1A1A1'}`,padding: isLargeS65 ? '1rem':'2rem' }}>
        <img src={ft3img} alt="images" width={isLargeS65 ? '50px':"auto"} />
        <Typography variant="body2"fontSize={15} fontWeight={500}>Sandals</Typography>
       </Box>
  
       <Box style={ortstyle} onClick={() => handleBoxClick('boy4')}  sx={{ border: ` ${active === 'boy4' ? '3px solid #5AB27E' : '1px solid #A1A1A1'}`,padding: isLargeS65 ? '1rem':'2rem' }}>
        <img src={ft4img} alt="images" width={isLargeS65 ? '70px':"auto"}  style={{marginBottom:isLargeS65 ? 'auto':'1.5rem'}}/>
        <Typography variant="body2"fontSize={15} fontWeight={500}>Sneaker</Typography>
       </Box>
      
       <Box style={ortstyle} onClick={() => handleBoxClick('boy5')}  sx={{ border: ` ${active === 'boy5' ? '3px solid #5AB27E' : '1px solid #A1A1A1'}`,padding: isLargeS65 ? '1rem':'2rem' }}>
        <img src={ft5img} alt="images" width={isLargeS65 ? '70px':"auto"} />
        <Typography variant="body2"fontSize={15} fontWeight={500}>Boots</Typography>
       </Box>

       <Box style={ortstyle} onClick={() => handleBoxClick('boy6')}  sx={{ border: ` ${active === 'boy6' ? '3px solid #5AB27E' : '1px solid #A1A1A1'}`,padding: isLargeS65 ? '1rem':'2rem' }}>
        <img src={ft6img} alt="images" width={isLargeS65 ? '70px':"auto"} />
        <Typography variant="body2"fontSize={15} fontWeight={500}>Heeled boots</Typography>
       </Box>
        </Box>

        <Box style={{textAlign:'center',margin:'3rem auto 2rem auto'}}>
          <Link to='/OutFits'>
        <Button variant="contained" style={{background:"#5AB27E",width:isLargeS65 ? '80%' :'350px'}}>
          Next
        </Button>
        </Link></Box>
      </Container>
      </>
  
    )
  }

export default ShoeStyle