import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from "./Item"
import slider from "../slider.json"
import { colors } from '@mui/material';

function CarouselComponent(props)
{
    console.log(slider);
    return (
    <div className="carousel-container">
        <Carousel
            swipe={false}
            cycleNavigation={false}
            navButtonsAlwaysVisible={true}
            fullHeightHover={true}
            animation='slide'
            duration={700}
            next={ () => {console.log('next')} }
            prev={ () => {console.log('prev')} }
            indicatorIconButtonProps={{
                style: {
                  color: 'black',
                },
              }}
              activeIndicatorIconButtonProps={{
                style: {
                  color: 'lime',
                },
              }}
        >
            {
                slider.map( item => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    </div>    
    )
}

export default CarouselComponent;
