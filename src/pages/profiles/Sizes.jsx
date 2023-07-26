import React from 'react'
import { Box, Typography, Container, Button } from '@mui/material'
import Dashboardbar from '../../components/Dashboardbar'
import slctimg from '../../assets/clothset.png'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useMediaQuery } from "@mui/material";
const styleinput ={
    padding: '10px',
    borderRadius: '10px',
    outline: 'none',
    border: '1px solid #585858',
    width: '100%',
}

const Sizes = () => {

    const isLargeS65 = useMediaQuery("(max-width:650px)");


  return (

<>
       <Dashboardbar/>
      <Container maxWidth="xl">
      <Box style={{margin:'2rem auto'}}>
          <Typography variant="h6" color="#194B2D" fontWeight={800}fontSize={ isLargeS65 ? 28:45}>What’s Your Usual Size? </Typography>
          <Typography variant="body1" color="#848484">Do tell us what sizes of clothing you normally wear.</Typography>
      </Box>
      </Container>
      <Container maxWidth="xl">
        <Box style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'10px',width:'100%',flexDirection:isLargeS65 ? 'column':'row'}}>

         <Box style={{width:isLargeS65 ? '100%':'50%'}}>
         <form style={{display:'flex',flexDirection:'column',gap:'30px'}}>
              <Box>
                <label htmlFor="1">Tops (e.g blouses)</label>
                <Form.Select aria-label="Select Size">
                <option>Select Size</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
              </Box>
              <Box style={{display:'flex',gap:isLargeS65 ?'30px':'10px',flexDirection:isLargeS65 ? 'column':'row'}}>
              <Box style={{width:'100%'}}>
                <label htmlFor="1">Bottoms(Trousers)</label>
                <Form.Select aria-label="Select Size">
                <option>Select Size</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
              </Box>
              <Box style={{width:'100%'}}>
                <label htmlFor="1">Footwear</label>
                <Form.Select aria-label="Select Size">
                <option>Select Size</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
              </Box>

              </Box>
              <Box>
                <label htmlFor="1">Bra Size</label>
                <Form.Select aria-label="Select Size">
                <option>Select Size</option>
                <option value="1">29</option>
                <option value="2">30</option>
                <option value="3">32</option>
                <option value="3">34</option>
                <option value="3">36</option>
                </Form.Select>
              </Box>
              <Link to='/Measurements'>
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

export default Sizes