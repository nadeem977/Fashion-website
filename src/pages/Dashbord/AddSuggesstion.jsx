import React, { useState } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import Dashboardbar from '../../components/Dashboardbar';
import imgIcon from '../../assets/paste 1.png';
import { useMediaQuery } from "@mui/material";
const styleinput = {
  padding: '6px',
  borderRadius: '10px',
  outline: 'none',
  border: '1px solid gray'
};

const AddSuggestion = () => {

  const isLargeS13 = useMediaQuery("(max-width:800px)");
  const isLarge40 = useMediaQuery("(max-width:400px)");
  const [selectedImages, setSelectedImages] = useState([null, null, null]);
  const handleImageChange = (event, index) => {
    const file = event.target.files[0];
    const updatedImages = [...selectedImages];
    if (file) {
      updatedImages[index] = URL.createObjectURL(file);
    } else {
      updatedImages[index] = null;
    }
    setSelectedImages(updatedImages);
  };

  return (
    <>
      <Dashboardbar />
      <Container maxWidth="xl">
        <Box style={{ margin: "2rem auto" }}>
          <Typography variant="h6" style={{ fontSize: "35px", fontWeight: "600" }}>Wedding Style Profile</Typography>
          <Typography variant="subtitle1" color="#838383">Here’s the complete style profile of the user</Typography>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <Box style={{ width: 'fit-content' ,margin:isLargeS13 ? 'auto':'0px' }}>
          <Typography variant="body1" style={{textAlign:'center',fontWeight:'500',marginBottom:'1rem'}}>Image #1</Typography>
            <Box style={{ border: '1px dotted #5AB27E', width: isLarge40 ?'100%':'250px', height: '200px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <label htmlFor="image-input-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {selectedImages[0] ? (
                  <img src={selectedImages[0]} alt="Selected Image" style={{ width: isLarge40 ?'100%':'250px', height: '200px', borderRadius: '10px' }} />
                ) : (
                  <>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <img src={imgIcon} alt="Selected Image" />
                      <Typography variant='body1' color={'#838383'}>Add photo</Typography>
                    </Box>
                  </>
                )}
              </label>
              <input
                type="file"
                id="image-input-1"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(event) => handleImageChange(event, 0)}
              />
            </Box>
            <Typography variant="caption" color="initial">Price</Typography> <br />
            <input type="number" style={styleinput} sx={{width:isLarge40 ?'100%':'250px'}} />
          </Box>

          <Box style={{ width: 'fit-content' ,margin:isLargeS13 ? 'auto':'0px' }}>
          <Typography variant="body1" style={{textAlign:'center',fontWeight:'500',marginBottom:'1rem'}}>Image #2</Typography>
            <Box style={{ border: '1px dotted #5AB27E', width: isLarge40 ?'100%':'250px', height: '200px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <label htmlFor="image-input-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {selectedImages[1] ? (
                  <img src={selectedImages[1]} alt="Selected Image" style={{ width: isLarge40 ?'100%':'250px', height: '200px', borderRadius: '10px' }} />
                ) : (
                  <>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <img src={imgIcon} alt="Selected Image" />
                      <Typography variant='body1' color={'#838383'}>Add photo</Typography>
                    </Box>
                  </>
                )}
              </label>
              <input
                type="file"
                id="image-input-2"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(event) => handleImageChange(event, 1)}
              />
            </Box>
            <Typography variant="caption" color="initial">Price</Typography> <br />
            <input type="number" style={styleinput} sx={{width:isLarge40 ?'100%':'250px'}} />
          </Box>

          <Box style={{ width: 'fit-content' ,margin:isLargeS13 ? 'auto':'0px' }}>
            <Typography variant="body1" style={{textAlign:'center',fontWeight:'500',marginBottom:'1rem'}}>Image #3</Typography>
            <Box style={{ border: '1px dotted #5AB27E', width: isLarge40 ?'100%':'250px', height: '200px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <label htmlFor="image-input-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {selectedImages[2] ? (
                  <img src={selectedImages[2]} alt="Selected Image" style={{ width: isLarge40 ?'100%':'250px', height: '200px', borderRadius: '10px' }} />
                ) : (
                  <>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <img src={imgIcon} alt="Selected Image" />
                      <Typography variant='body1' color={'#838383'}>Add photo</Typography>
                    </Box>
                  </>
                )}
              </label>
              <input
                type="file"
                id="image-input-3"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(event) => handleImageChange(event, 2)}
              />
            </Box>
            <Typography variant="caption" color="initial">Price</Typography> <br />
            <input type="number" style={styleinput} sx={{width:isLarge40 ?'100%':'250px'}} />
          </Box>
        </Box>
      <Button variant="contained" style={{background:'#5AB27E',width:isLarge40 ? '100%':'60%',margin:'2rem 0px'}} >
      Send for Review
      </Button>
      </Container>
    </>
  );
};

export default AddSuggestion;
