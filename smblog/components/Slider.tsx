import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Sliderdiv from './slider_div';
import 'react-awesome-slider/dist/styles.css';



const SliderComponent = () => (
    <AwesomeSlider animation="cubeAnimation">
    <div>
        <Sliderdiv/>
    </div>
    <div>
    <Sliderdiv/>
    </div>
    <div>
    <Sliderdiv/>
    </div>
    <div>
    <Sliderdiv/>
    </div>
  </AwesomeSlider>
);

export default SliderComponent;
