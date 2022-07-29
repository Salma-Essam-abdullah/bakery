import React, { Component } from "react";

import 'bootstrap/dist/css/bootstrap.css';
// import Carousel from 'react-bootstrap/Carousel';
import { Carousel } from 'react-carousel-minimal';


function DemoCarousel() {
 const data = [
    {
      image: "images/banner/img-slider-1.jpg",
      caption: "We Implement Sweet Dream" 
    
    },
    {
      image: "images/banner/img-slider-2.jpg",
      caption: "A little bliss in every bite"
    }
   
  ];

  const captionStyle = {
    fontSize: '5em',
    fontWeight: 'bold',
  }
 
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
 
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={1600}
            width="6000px"
            height="600px"
            captionStyle={captionStyle}
            radius="10px"
          
            captionPosition="center"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
           
          />
        </div>
      </div>
    </div>
  );
}

export default DemoCarousel;