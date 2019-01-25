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
    switch(this.props.show){
            case "Arsreikningur": return <Arsreikningur />;
            case "Mjolkurskolinn": return <Mjolkurskolinn />;
            case "Stuttmyndir": return <Stuttmyndir />;
            case "Velunnarar": return <Velunnarar />;
            case "Vefrit": return <Vefrit/>;
            case "deildA": return <DeildA />;
            case "deildB": return <DeildB />;
            case "Umsafnid": return <UmSafnid />;
            default: return <UmSafnid />;
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
