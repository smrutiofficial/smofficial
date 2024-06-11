import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Sliderdiv from './slider_div';
import 'react-awesome-slider/dist/styles.css';
import { blogs } from '../pages/Blog';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const SliderComponent = () => (
  <AutoplaySlider
    // animation="cubeAnimation"
    play={true}
    cancelOnInteraction={false}
    interval={3000}
  >
    {blogs.filter((blog: any) => blog.featured).map((blog: any, index: number) => (
      <div key={index}>
        <Sliderdiv blog={blog} />
      </div>
    ))}
  </AutoplaySlider>
);

export default SliderComponent;
