import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import logo from "../img/logo130.png"
import "./header.scss";



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
                        <li className="nav-item" key={1}>
                              <Link className="nav-link color-white" to="/signin" > Sign in </Link>
                        </li>,
                        <li className="nav-item" key={2}>
                              <Link className="nav-link color-white" to="/signup" > Sign up </Link>
                        </li>
                  ];
            }
      }

       render() {
             
             return (
                   <div className="header">
                        <nav className="nav navbar-light color-white">
                              <Link to="/" className="navbar-brand color-white"> Landbúnaðarsafn Íslands </Link>
                              <ul className="nav navbar-nav ">
                                    {this.renderLinks()}
                              </ul>
                              <div className="header__button"><img src={logo}/></div>
                        </nav>
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