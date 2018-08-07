import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import ImageSlider from './imageSlider';
export default class App extends Component {


  render() {
    return (
          <div>
            <Header />
            
            {this.props.children}
            <Footer />
          </div>
    );
  }
}
