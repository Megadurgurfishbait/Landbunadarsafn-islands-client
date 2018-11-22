import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Arsreikningur from './undirsidur/arsreikningur';
import UmSafnid from './undirsidur/umSafnid';
import Mjolkurskolinn from './undirsidur/mjolkurskolinn';
import Stuttmyndir from './undirsidur/stuttmyndir';
import Velunnarar from './undirsidur/velunnarar';
import Vefrit from './undirsidur/vefrit';
import DeildA from './undirsidur/deildA';
import DeildB from './undirsidur/deildB';

import "../style/myStyles/_knowledgeLinks.scss";

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
    if(this.props.show === "Vefrit"){
      return (<Vefrit />)
    }
    if(this.props.show === "deildA"){
      return (<DeildA />)
    }
    if(this.props.show === "deildB"){
      return (<DeildB />)
    }
    if(this.props.show === "Umsafnid"){
      return (<UmSafnid />)
    }
  }
  componentDidUpdate = () => {


      const myDomNode = ReactDOM.findDOMNode(this.myRef);
      console.log(myDomNode);
      if(myDomNode != null ){
            window.scrollTo({
                  top: myDomNode.offsetTop-80,
                  behavior: "smooth"
            });
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
      <div className="KnowledgeLinks"  ref={re => {this.myRef = re}}>
        {this.renderMyText()}
      </div>
    )
  }
}
