import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import '../../style/myStyles/_skraut.scss';
import{ browserHistory} from 'react-router';

class Signout extends Component {

      componentDidMount() {
            this.props.signoutUser();
      }

      _onClick = () => {
            browserHistory.push('/');
      }

      render(){
            return (
            <div className="skraut">
                  <h1>Sjáumst!</h1>
                  <button onClick={this._onClick}> Ýttu á mig til að fara á forsíðu</button>
            </div>
            )
      }
}




export default connect(null, actions)(Signout);