import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import Dashboardbar from '../../components/Dashboardbar'
import profilimg from '../../assets/profil.png'
import { useMediaQuery } from "@mui/material";
import { Link } from 'react-router-dom';
const styleinputs = {
width:'100%',
padding: '10px',
borderRadius: '10px',
outline: 'none',
border:'1px solid #A1A1A1'
}

const Profile = () => {

    const isLarge50 = useMediaQuery("(max-width:580px)");

  return (
    <>
    <Dashboardbar/>
    <Container maxWidth="xl">
    <Box style={{margin:'2rem auto'}}>
        <Typography variant="h6" color="#194B2D" style={{fontWeight:'800',fontSize:'50px',textAlign: isLarge50 ? 'center':'inherit'}}> My Profile</Typography>
    </Box>
    </Container>
    <Container maxWidth="xl">
      <Box style={{display:'flex',justifyContent:'space-between',gap:'20px',width:'100%',margin:'2rem auto',flexDirection: isLarge50 ? 'column':'row'}}>
        <Box style={{width:isLarge50 ? '100%':'400px',textAlign:'center',background:'#F9F9F9',borderRadius:'10px',padding:'1rem'}}>
            <img src={profilimg} alt="images" style={{width:isLarge50 ?'30%':'auto'}}/>
            <Typography variant="h6">Andrew Smith</Typography>
            <Typography variant="body1" color="#828282">andrew123@gmail.com</Typography>
        </Box>
        <Box style={{width:isLarge50 ? '100%':'60%'}}>
            <form style={{display:'flex',flexDirection:'column',gap:'20px'}}>
               <Box>
               <label htmlFor="1">Name</label>
                <input id='1' type="text" placeholder='John Smith'style={styleinputs}/>
               </Box>
               <Box>
               <label htmlFor="2">Email Address</label>
                <input id='2' type="text" placeholder='abdullah12@gmail.com'style={styleinputs}/>
               </Box>
               <Box>
               <label htmlFor="3">Phone</label>
                <input id='3' type="text" placeholder='0483-38497483'style={styleinputs}/>
               </Box>
               <Box>
               <label htmlFor="4">Password</label>
                <input id='4' type="Password" placeholder='****************'style={styleinputs}/>
               </Box>
               <Box style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
                <Link to='/PersonalInfo'> 
                <Button variant="contained" style={{background:'#5AB27E'}}>Edit Personal info</Button>
                </Link>
              <Link to='/Measurements'>
              <Button variant="contained" style={{background:'#5AB27E'}}>Edit measurements</Button>
              </Link>
                <Button variant="contained" style={{background:'#5AB27E'}}>Edit my sizes</Button>
               </Box>
            </form>
        </Box>
      </Box>
    </Container>
    </>
  )
}

export default Profile