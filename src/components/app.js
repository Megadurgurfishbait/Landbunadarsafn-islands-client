import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import "../style/myStyles/_app.scss";
import "../style/myStyles/_imageSlider.scss";

    
export default class App extends Component {


  render() {
    return (
          <div>
            <Header />
            <div className="slider-container"/>
            {this.props.children}
            <Footer />
          </div>
    );
  }
}
