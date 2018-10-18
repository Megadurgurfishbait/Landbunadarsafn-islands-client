import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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

             return (
                   <div className="header">
                     <nav className="header---container">
                       <Link to="/" className="header--block">
             { /* <img src="https://fierce-plateau-26257.herokuapp.com/image/84aa59c5182c189203db409762919c1d.jpg" width="64" height="64"  /> */}
                              Landbúnaðarsafn Íslands 
                        </Link>
                        </nav>
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
