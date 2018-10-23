import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from '../config';
import "../style/myStyles/_header.scss";


 class Header extends Component {


      renderLinks() {

            if(this.props.authenticated){
                  return  [
                  <li className="nav-item">
                        <Link className="nav-link color-white" to="/signout">Skra mig ut</Link>
                  </li>,
                  <li className="nav-item">
                        <Link className="nav-link color-white" to="/myndasafn">Myndasafn</Link>
                  </li>,
                  <li className="nav-item">
                        <Link className="nav-link color-white" to="/feature"> Skrifa grein </Link>
                  </li>,
                  <li className="nav-item">
                        <Link className="nav-link color-white" to="/test"> Velja myndir á forsíðu </Link>
                  </li>,
                  <li className="nav-item">
                        <Link className="nav-link color-white" to="/addevent"> Add event </Link>
                  </li>
                  ];
            }else {
                  // Show a link to sign in or sign up.
                  return [
                        <li className="links--item" key={1}>
                          <Link className="links--item__a color-white" to="/" > Forsíða </Link>
                        </li>,
                        <li className="links--item" key={2}>
                          <Link className="links--item__a color-white" to="/frodleikur" > Fróðleikur </Link>
                        </li>,
                        <li className="links--item" key={4}>
                          <Link className="links--item__a color-white" to="/opnunartimar" > Opnunartími </Link>
                        </li>,
                        <li className="links--item" key={5}>
                          <Link className="links--item__a color-white" to="/english" > English </Link>
                        </li>
                  ];
            }
      }

       render() {
            const ROOT_URL = `${config.slod}/image`;
             return (
                   <div className="header">
                     <div className="header--container">
                       <Link to="/" className="header--block">
                              <div className="header--block__image">
                                    <img src={`${ROOT_URL}/afdecd580a432ec69dc923dda5f6231a.png`}  /> 
                              </div>

                              <div className="header--block__title"><h1>Landbúnaðarsafn Íslands </h1></div>
                        </Link>
                        </div>
                       <ul className="links ">
                         {this.renderLinks()}
                       </ul>
                   </div>
             )
       }
 }



 function mapStateToProps(state){

       return {
             authenticated: state.auth.authenticated
       };
 }

 export default connect(mapStateToProps)(Header);
