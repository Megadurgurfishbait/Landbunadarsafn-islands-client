import React, { Component } from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import "./addEvent.scss";

class componentName extends Component {
      constructor() {
            super();
            this.state = {
                  title: "",
                  description: "",
                  date: ""
            }
      }
   
      handleChange = (e) => {
            const target = e.target;
            const name = target.name === 'title' ?  target.value : target.value;
            this.setState({
                  [target.name] : name
            });
            console.log(this.state);
      }
      handleDate = (e) => {
            this.setState({date: e.target.value});
      }

      handleSubmit = (event) => {
            event.preventDefault();
            if(!this.state.date){
                  alert("Það verður að setja inn dagsetningu")
            }
            let {title, description, date} = this.state;
            this.props.addEvent({title, description, date}, callback => {
            });

            browserHistory.push("/");
      }

      render() {
            console.log(this.props);
            return (
                  <div className="addEvent">
                        <form onSubmit={this.handleSubmit} className="addEvent--form">
                              <label>
                                    <h1>Titill:</h1>
                                    <input type="text" className="addEvent--form__title" value = {this.state.title} onChange={this.handleChange} name="title"/>
                              </label>
                              <label>
                                   <h1> Lýsing: </h1>
                                    <input type="textarea" className="addEvent--form__textarea"value ={this.state.description} onChange={this.handleChange} name="description" />
                              </label>
                              <label>
                                   <h1> Dagsetning: </h1>
                                    <input id="date" type="date" value={this.state.date} onChange={this.handleDate}/>
                              </label>
                              <button type="submit" className="feature--btn">Senda mig</button>
                        </form>
                  </div>
            );
      }
}

function mapStateToProps(state) {
      console.log("State: ", state);
      return {
            event: state.event.data
      };
}

export default connect(mapStateToProps, actions)(componentName);
