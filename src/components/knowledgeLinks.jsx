import React, { Component } from 'react';
import { Link } from 'react-router';
import Arsreikningur from './undirsidur/arsreikningur';
import UmSafnid from './undirsidur/umSafnid';
import Mjolkurskolinn from './undirsidur/mjolkurskolinn';
import Stuttmyndir from './undirsidur/stuttmyndir';
import Velunnarar from './undirsidur/velunnarar';
import './knowledgeLinks.scss';

export default class KnowledgeLinks extends Component {

  renderMyText = () => {
    if(this.props.show === "Arsreikningur"){
      return (<Arsreikningur />);
    }
    if(this.props.show === "Mjolkurskolinn"){
      return (<Mjolkurskolinn />)
    }
    if(this.props.show === "Stuttmyndir"){
      return (<Stuttmyndir />)
    }
    if(this.props.show === "Velunnarar"){
      return (<Velunnarar />)
    }
  }

  render() {
    if(!this.props.show){
      return (
        <div className="KnowledgeLinks">
          <UmSafnid />
        </div>
      )
    }
    
    return(
      <div className="KnowledgeLinks">
        {this.renderMyText()}
      </div>
    )
  }
}
