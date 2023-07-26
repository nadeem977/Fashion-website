import React from 'react'
import { Box, Typography, Container, Button } from '@mui/material'
import Dashboardbar from '../../components/Dashboardbar'
import slctimg from '../../assets/slct.png'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useMediaQuery } from "@mui/material";
const styleinput ={
    padding: '10px',
    borderRadius: '10px',
    outline: 'none',
    border: '1px solid #cfcfcf',
    width: '100%',
}

const PersonalInfo = () => {
    
    const isLargeS65 = useMediaQuery("(max-width:650px)");

  return (
<>
       <Dashboardbar/>
      <Container maxWidth="xl">
      <Box style={{margin:'2rem auto'}}>
          <Typography variant="h6" color="#194B2D" fontWeight={800}fontSize={ isLargeS65 ? 28:45}>Now Let’s Get Personal</Typography>
          <Typography variant="body1" color="#848484">Those unique details that make you you—tell us all about them.</Typography>
      </Box>
      </Container>
      <Container maxWidth="xl">
        <Box style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'10px',width:'100%',flexDirection:isLargeS65 ? 'column':'row'}}>

         <Box style={{width:isLargeS65 ? '100%':'50%'}}>
         <form style={{display:'flex',flexDirection:'column',gap:'30px'}}>
              <Box>
                <label htmlFor="1">How do you feel?</label>
                <input id='1' type="text" placeholder='Tell us about your feelings' style={styleinput} />
              </Box>

              <Box style={{display:'flex',gap:isLargeS65 ?'30px':'10px',flexDirection:isLargeS65 ? 'column':'row'}}>
               <Box style={{width:'100%'}}>
               <label htmlFor="2">Your Height</label>
                <input id='2' type="number" placeholder='cm' style={styleinput} />
               </Box>
               <Box style={{width:'100%'}}>
               <label htmlFor="2">Your Weight</label>
                <input id='2' type="number" placeholder='Kgs' style={styleinput} />
               </Box>
              </Box>
              <Box>
                <label htmlFor="1">Your Eye Color</label>
                <Form.Select aria-label="Select Color">
                <option>Select Color</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
              </Box>
              <Box>
                <label htmlFor="1">Current Hair Color</label>
                <Form.Select aria-label="Select Color">
                <option>Select Color</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
              </Box>
              <Link to='/Sizes'>
              <Button variant="contained" style={{background:'#5AB27E',width:'100%'}}>
              Next
              </Button>
              </Link>
         </form>
         </Box>
         <Box  style={{width: isLargeS65 ? '100%':'50%'}}>
            <img src={slctimg} alt="images" style={{width:'100%'}} />
         </Box>
        </Box>
      </Container>
</>
  )
}

export default PersonalInfo