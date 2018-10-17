import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import ImageSlider from './imageSlider';
import "../style/myStyles/_app.scss";


    
export default class App extends Component {


  render() {
    return (
          <div>
            
            <Header />
            <ImageSlider />
            {this.props.children}
            <Footer />
          </div>
    );
  }
}
