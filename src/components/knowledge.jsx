import React, { Component } from 'react';
import { Link } from 'react-router';
import KnowledgeLinks from './knowledgeLinks';
import './knowledge.scss';


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
      <img className="knowledgeContainer--links__img" src="https://landbunadarsafn.files.wordpress.com/2016/03/vidurkennt_safn2.jpg"/>,
      <h1 className="knowledgeContainer--links__title"> Meiri fróðleikur</h1>,
      <li className="knowledgeContainer--links__li">
        <button id="Arsreikningur" onClick={this.handleOnClick}>Arsreikningur</button>
      </li>,
      <li className="knowledgeContainer--links__li">
        <button id="" onClick={this.handleOnClick}>Um Safnið </button>
      </li>,
      <li className="knowledgeContainer--links__li">
        <button id="Mjolkurskolinn" onClick={this.handleOnClick}>Mjólkurskólinn</button>
      </li>,
      <li className="knowledgeContainer--links__li">
        <button id="Stuttmyndir" onClick={this.handleOnClick}>Stuttmyndir</button>
      </li>,
      <li className="knowledgeContainer--links__li">
        <button id="Velunnarar" onClick={this.handleOnClick}>Velunnarar</button>
      </li>
    ];
  }
  render() {
    console.log(this.state.show);
    return (

      <div className="knowledgeContainer">
        <div className="knowledgeContainer--header"><h1> Heim &rarr; {this.state.show ? this.state.show : "Um safnið"}</h1></div>
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
