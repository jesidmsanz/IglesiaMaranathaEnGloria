import React, { Component } from "react";
import Slider from '../components/slider';
import Section from '../components/section';
import Footer from  '../components/footer'

export default class Inicio extends Component {
  render() {
    return (
      <div>
        <Slider />
        <Section/>
        <Footer/>
      </div>
    );
  }
}
