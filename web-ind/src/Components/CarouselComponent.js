import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './Item';
import slider from '../slider.json';
import { Box, Button, TextField } from '@mui/material';

function CarouselComponent(props)
{
    const [images, setImages] = useState(slider);

    const handleAddImage = (e) => {
        if (e.target.files && e.target.files[0]) {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.onload = (event) => {
            setImages((prevImages) => [
              ...prevImages,
              { id: prevImages.length + 1, img: event.target.result, title: `Image ${prevImages.length + 1}` },
            ]);
          };
          reader.readAsDataURL(file);
        }
      };

      const handleAddImageByUrl = (url) => {
        if (url.trim()) {
          setImages((prevImages) => [
            ...prevImages,
            { id: prevImages.length + 1, img: url, title: `Image ${prevImages.length + 1}` },
          ]);
        }
      };


    console.log(slider);
    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <Carousel
          animation='slide'
          swipe={false}
          autoPlay={false}
            indicatorIconButtonProps={{
              style: {
                color: 'gray',
              },
            }}
            activeIndicatorIconButtonProps={{
              style: {
                color: 'red',
              },
            }}
          >
            {images.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </Carousel>
    
          <Box
                sx={{
                marginTop: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                }}
            >
                <Button
                variant="contained"
                component="label"
                sx={{ textTransform: 'none' }}
                >
                Upload Image
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleAddImage}
                    hidden
                />
                </Button>

                <TextField
                label="Enter Image URL"
                variant="outlined"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                    handleAddImageByUrl(e.target.value);
                    e.target.value = '';
                    }
                }}
                sx={{ width: '300px' }}
                />
            </Box>
        </div>
      );
}

export default CarouselComponent;
