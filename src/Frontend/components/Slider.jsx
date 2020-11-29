import React from "react";
import { Carousel } from "react-bootstrap"; 
/* import cross from '../assets/img/cross';
import bible from '../assets/img/bible';
import prayer from '../assets/img/prayer'; */ 

export default class Slider extends React.Component {
  render() {
    return (
           <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../assets/img/cross.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Third slide"
        />
    
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Third slide"
        />
    
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
    );
  }
}
