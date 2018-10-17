import  { Component } from 'react';
import ReactDOM from 'react-dom';

import "../style/myStyles/_portal.scss";


const portalRoot = document.querySelector('.portal');
console.log("portal", portalRoot);

export default class Portal extends Component {

      constructor() {
            super();
            this.el = document.createElement('div');
            this.el.className = "portalDiv";
            console.log("el er: ", this.el);
      }

      componentDidMount = () => {
            portalRoot.appendChild(this.el);
      }

      componentWillUnmount = () => {
            portalRoot.removeChild(this.el);
      }



      render() {
            console.log(this.props.children);
            return ReactDOM.createPortal(this.props.children, this.el);
      }



}

