import React, { Component } from 'react';
import "./footer.scss";


const Footer = (props) => 
      <div className="footer">
            <div className="footer--left">
                  {/*
                  <ul>
                       {props.array ? 

                       <div>
                               <li>
                                     
                              </li>

                       </div>

                       : <div>loading</div>}
                  </ul>
                  
                  
                  <h3>Önnur söfn </h3>
                  <li className="li"><a href="http://www.thjodminjasafn.is/"> Þjóðminjasafn Íslands</a></li>
                  <li className="li"><a href="http://www.gl-estrup.dk/dk/forside.aspx"> Dansk landbrugsmuseum </a></li>
                  <li className="li"><a href="http://vitenparken.no/">Norsk landbrugsmuseum</a></li>
                  <li className="li"><a href="http://www.sarka.fi/in-english/">The Finnish Museum of Agriculture</a></li>
                  */}
           </div>
            <div className="footer--middle">
                  <h3>Sérstakur velunnari safnsins</h3>
                  <img src="https://thor.is/image/data/simplify/thorlogo_web.png"/>
            </div>
            <div className="footer--right">
                  <h3>Hafðu samband</h3>
                  <p> 
                        <h5  className="footer--right__text">Hvanneyri</h5>
                        <h5  className="footer--right__text">311 Borgarnes</h5>
                        <h5  className="footer--right__text">Sími 844 7740</h5>
                        <h5  className="footer--right__text">Sumaropnun: júní - ágúst, frá kl. 11:00 - 17:00 </h5>
                        <h5  className="footer--right__text">Vetraropnun: eftir samkomulagi</h5>
                  </p>
            </div>
      </div>

export default Footer;