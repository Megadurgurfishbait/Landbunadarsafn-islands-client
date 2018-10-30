import React, { Component } from 'react';
import Header from './header';

import Footer from './footer';
import "../style/myStyles/_app.scss";
import "../style/myStyles/_imageSlider.scss";
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';


export default class App extends Component {

      state = {
            sideDrawerOpen: false,
            items: ""
        };


      drawerToggleClickHandler = () =>{
            this.setState((prevState) =>{
                  return {sideDrawerOpen: !prevState.sideDrawerOpen}
            });
            
      };

      backdropClickHandler = () => {
            this.setState({sideDrawerOpen: false});
      }

      logItems = () => {
            this.setState()
      }


  render() {

      let backdrop;
      if(this.state.sideDrawerOpen){
            backdrop = <Backdrop click={this.backdropClickHandler} />;
      }
 

    return (
          <div style={{height: '100%'}}>
            <Header  drawerClickHandler={this.drawerToggleClickHandler}/>
            <SideDrawer drawerClickHandler={this.drawerToggleClickHandler}  show={this.state.sideDrawerOpen} />
            {backdrop}
            <div className="slider-container"/>

            {this.props.children}
            <Footer />
          </div>
    );
  }
}
