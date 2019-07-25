import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import './css/slider.css';
import { Slide } from 'react-slideshow-image';
import image1 from './images/slide_4.jpg';
import image2 from './images/slide_3.jpg';
import image3 from './images/training-2874597_960_720.jpg';
const slideImages = [
  'Screenshot (1329).png',
  'Screenshot (1330).png',
  'Screenshot (1331).png'
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

class Slider extends Component {
  
  render() {
   
    
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${image1})`}}>
            <span>FIND TUTOR</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${image2})`}}>
            <span>FIND STUDENTS</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${image3})`}}>
            <span> To Boost Knowledge</span>
          </div>
        </div>
      </Slide>
    )
    }
  
}

export default Slider
