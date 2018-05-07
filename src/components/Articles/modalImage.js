import React, { Component } from 'react';

import './modalImage.scss';

export default class ModalImage extends Component {
      
      constructor() {
            super();
            this.state = {
                  className:""
            }
      }
      onChange = (e) => {
            if(e.target.type === "checkbox"){
                  if(e.target.checked){
                        console.log("her");
                        this.setState({className: "modalIamge--label--On"})
                  }else {
                        this.setState({className: ""})
                  }
             }
      }

      render(){

            return (    
                  <div className= "myModal--display__card--input  myModal--display__card">
                        <div className="prufa">
                              <input 
                                    className="modalImage--input"
                                    type={this.props.type}
                                    name="radioButtns"
                                    onChange={(e) => {this.props.onHandleChange(e); this.onChange(e); this.setState({check: e.target.value})}}
                                    id={this.props.id}
                              />
                              <label className={`${this.state.className} modalImage--label`} key={this.props.id} htmlFor={this.props.id} ></label>
                                    <img className="modalImage--image"
                                                src={this.props.path}
                                          />
                        </div>

                  </div>
            )
      }
}