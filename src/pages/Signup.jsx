import React from 'react'
import {
    Container,
    Box,
    Typography,
    TextField,
    Checkbox,
    Button,
    FormControlLabel,
    Modal,
    Backdrop,
  } from "@mui/material";
  import PropTypes from 'prop-types';
  import gogle from '../assets/gol.png'
  import { useMediaQuery } from "@mui/material";
  import signimg from '../assets/sginimg.png'
  import { useSpring, animated } from '@react-spring/web';
  import smsimg from '../assets/smseml.png'
import MinaNavbar from '../components/MinaNavbar';
import Footer from '../components/Footer';

  const Fade = React.forwardRef(function Fade(props, ref) {
    const {
      children,
      in: open,
      onClick,
      onEnter,
      onExited,
      ownerState,
      ...other
    } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter(null, true);
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited(null, true);
        }
      },
    });
  
    return (
      <animated.div ref={ref} style={style} {...other}>
        {React.cloneElement(children, { onClick })}
      </animated.div>
    );
  });
  
  Fade.propTypes = {
    children: PropTypes.element.isRequired,
    in: PropTypes.bool,
    onClick: PropTypes.any,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
    ownerState: PropTypes.any,
  };
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius:"10px",
    textAlign:"center"

  };
  



const Signup = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const islarge10 = useMediaQuery("(max-width:1050px)");
    const issmall40 = useMediaQuery("(max-width:450px)");
  

  return (
    <>
     <MinaNavbar/>
    <Container maxWidth="xl" style={{ margin: "4rem auto" }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexDirection: islarge10 ? "column" : "row",}}>
        <Box style={{ width: islarge10 ? "100%" : "50%" ,display:'flex',flexDirection:"column",gap:'30px'}}>
          <Box style={{ margin: "2rem 0px" }}>
            <Typography
              variant="h6"
              style={{
                fontSize: issmall40 ? "22px" : "35px",
                fontWeight: "600",
              }}
            >
           For Any Outfit & Location—We’ll Get It Sorted 
            </Typography>
            <Typography
              variant="subtitle1"
              color="#5AB27E"
              fontWeight={500}
              fontSize={22}
            >
              Save yourself travel hassle and get signed up
            </Typography>
          </Box>

          <Box style={{ width: "100%" }}>
            <Typography variant="subtitle1">Name</Typography>
            <TextField
              id="outlined-basic"
              type="email"
              placeholder="John Smith"
              variant="outlined"
              style={{ width: "100%" }}/>
          </Box>
         <Box style={{display:'flex',alignItems:"center",gap:'10px', flexDirection: issmall40 ? "column" : "row",}}>
         <Box style={{ width: "100%" }}>
            <Typography variant="subtitle1">Email Address</Typography>
            <TextField
              id="outlined-basic"
              type="email"
              placeholder="abdullah12@gmail.com"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </Box>
          <Box style={{ width: "100%" }}>
            <Typography variant="subtitle1">Phone</Typography>
            <TextField
              id="outlined-basic"
              type="password"
              placeholder="0483-38497483"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </Box>
         </Box>
         <Box style={{display:'flex',alignItems:"center",gap:'10px', flexDirection: issmall40 ? "column" : "row",}}>
         <Box style={{ width: "100%" }}>
            <Typography variant="subtitle1">Password</Typography>
            <TextField
              id="outlined-basic"
              type="email"
              placeholder="At least 8 characters"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </Box>
          <Box style={{ width: "100%" }}>
            <Typography variant="subtitle1">Confirm Password</Typography>
            <TextField
              id="outlined-basic"
              type="password"
              placeholder="Repeat Password"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </Box>
         </Box>

          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: issmall40 ? "column" : "row",
            }}
          >
            <FormControlLabel
              label="By creating an account you agree to the terms of use and our privacy policy."
              style={{ color: "#8B8B8B" }}
              control={<Checkbox />}
            />
          </Box>
          <Button
            variant="contained"
            style={{
              width: "100%",
              padding: "15px",
              background: "#5AB27E",
              fontSize: "18px",
            }}
            onClick={handleOpen}
          >
         Create an Acount
          </Button>
         <Box style={{textAlign:"center"}}>
         or
          <Button variant="contained" style={{display:'flex',alignItems:'center',gap:'20px',background:'transparent',color:'#E5792C',border:'1px solid #E5792C',width:"100%",margin:'1rem 0px',padding:'10px',fontSize:'22px'}}>
         <img src={gogle} alt="images" /> Sign Up with Google
          </Button>
          <Typography variant="body1" color='#848484'>
          Already have an account? <Typography variant="body1" component={'span'} color='#5AB27E'>
          Login
          </Typography>
        </Typography>
         </Box>
        </Box>

        <Box
          style={{
            width: islarge10 ? "100%" : "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <img src={signimg} alt="images" style={{ width: "100%" }} />
        </Box>
    
      </Box>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <img src={smsimg} alt="images" />
            <Typography id="spring-modal-title" variant="h6" component="h2">
            A Something In Your Email
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2,color:'red' }}>
            Just a quick confirmation to get you ready for
            fashion action 
            </Typography>
            <Button variant="contained" style={{background:'#5AB27E',margin:'10px auto'}} >
            Open Email
            </Button>
            <Typography variant="body1" style={{color:'#B3B3B3',margin:'1rem auto'}}>
            Didn’t receive an email? Send it again.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Container>
    <Footer/>
  </>
  )
}

export default Signup