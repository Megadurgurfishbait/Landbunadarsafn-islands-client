import React, { Component } from 'react';
import KnowledgeLinks from './knowledgeLinks';
import Portal from './Portal';
import  Icons from "../img/sprites.svg";

import "../style/myStyles/_knowledge.scss";

export default class Knowledge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: ""
    }
  }
  handleOnClick = (e) => {
    this.setState({show: e.target.id});
  }
  renderLinks() {
    return  [
      <li className="knowledgeContainer--links__li">
            <button id="Umsafnid" onClick={this.handleOnClick}>Um Safnið </button>
    </li>,
      <li className="knowledgeContainer--links__li">
            <button id="Velunnarar" onClick={this.handleOnClick}>Velunnarar</button>
      </li>,
      <li className="knowledgeContainer--links__li">
            <button id="Stuttmyndir" onClick={this.handleOnClick}>Stuttmyndir</button>
      </li>,
     <li className="knowledgeContainer--links__li">
            <button id="Arsreikningur" onClick={this.handleOnClick}>Arsreikningur</button>
      </li>,
      <li className="knowledgeContainer--links__li">
             <button id="Mjolkurskolinn" onClick={this.handleOnClick}>Mjólkurskólinn</button>
      </li>,
      <li className="knowledgeContainer--links__li ">
            <div className="item">

                  <input type="checkbox" id="Vefrit"/>
                  <label  htmlFor="Vefrit" id="Vefrit" onClick={this.handleOnClick}>Vefrit</label>
                  <svg>
                        <use xlinkHref={`${Icons}#icon-triangle-right`}></use>
                  </svg>

                  <ul>
                        <li className="knowledgeContainer--links__li__li"><a id="deildA"onClick={this.handleOnClick}>Deild A</a></li>
                        <li className="knowledgeContainer--links__li__li"><a id="deildB"onClick={this.handleOnClick}>Deild B</a></li>
                  </ul>

            </div>
      </li>
    ];
  }
  render() {

    return (

      <div className="knowledgeContainer">
                        <Portal>
                        <div className="post--component__title">
                              <h1>
                                    Fróðleikur
                              </h1>
                        </div>
                  </Portal>
        <div className="knowledgeContainer--bottom">
          <div className="knowledgeContainer--text"><KnowledgeLinks show={this.state.show}/></div>
          <div className="knowledgeContainer--links">
            <ul className="knowledgeContainer--links__ul">
              {this.renderLinks()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
