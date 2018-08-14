import React, { Component } from 'react';
import { Link, browserHistory } from "react-router";
import './fetcher.scss';

const ROOT_URL = "https://fierce-plateau-26257.herokuapp.com/image"
const Fetcher = (props) => 
      <div className={props.className}>
      {props.array ? (props.array.map(value => {
            return (
                  <li className={props.className + "--card"} key={value._id}>
                        <Link className={props.className + "--card" + "__link"}to={`/${props.path}/${value._id}`  }bull={value._id}>
                        
                              <img className={props.className + "--card" + "__image"} src={`${ROOT_URL}/${value.headingImg}`} />
                              <div className={props.className + "--card" + "__textbox"}>
                                    <h1 className={props.className + "--card" + "__title"}>{value.title}</h1>
                                    <h3 className={props.className + "--card" + "__date"}>{value.createdAt}</h3>
                              </div>
                        </Link>
                  </li>

            )})): 
            <div> Loading..</div>}
      </div>


export default Fetcher;