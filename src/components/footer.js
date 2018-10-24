import React from 'react';
import "../style/myStyles/_footer.scss";
import  Icons from "../img/foooter/sprites.svg";

const Footer = (props) => 
      <div className="footer">
            <ul className="footer-list">
                  <li className="footer-list-items">
                        <svg>
                              <use xlinkHref={`${Icons}#icon-clock`}></use>
                        </svg>
                        <span className="footer-list-items-text1">
                              Sumaropnun: júní - ágúst, frá kl. 11:00 - 17:00
                              Vetraropnun: eftir samkomulagi
                        </span>
                  </li>
                  <li className="footer-list-items">
                        <svg>
                              <use xlinkHref={`${Icons}#icon-email`}></use>
                        </svg>
                        <span className="footer-list-items-text">
                              Ragnhildurhj@lbhi.is
                        </span>
                  </li>
                  <li className="footer-list-items">
                        <svg>
                              <use xlinkHref={`${Icons}#icon-phone`}></use>
                        </svg>
                        <span className="footer-list-items-text">
                              +354 844 7740
                        </span>
                  </li>
                  <li className="footer-list-items">
                        <svg>
                              <use xlinkHref={`${Icons}#icon-location-pin`}></use>
                        </svg>
                        <span className="footer-list-items-text">
                              Hvanneyri 311 Borgarnes
                        </span>
                  </li>
            </ul>
      </div>

export default Footer;