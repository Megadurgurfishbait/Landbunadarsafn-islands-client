import  { Component } from 'react';
import ReactDOM from 'react-dom';

import "../style/myStyles/_portal.scss";


const portalRoot = document.querySelector('.portal');

export default class Portal extends Component {

      constructor() {
            super();
            this.el = document.createElement('div');
            this.el.className = "portalDiv";

      }

      componentDidMount = () => {
            portalRoot.appendChild(this.el);
      }

      componentWillUnmount = () => {
            portalRoot.removeChild(this.el);
      }


      render() {
            
            return ReactDOM.createPortal(this.props.children, this.el);
      }



}

