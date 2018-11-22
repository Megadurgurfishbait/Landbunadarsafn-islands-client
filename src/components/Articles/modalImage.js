import React, { Component } from 'react';
import '../../style/myStyles/_modalImage.scss';

export default class ModalImage extends Component {
      
      constructor() {
            super();
            this.state = {
                  className:""
            }
      }
      onChange = (e) => {
            console.log(e.target.id);
            if(e.target.type === "checkbox"){
                  if(e.target.checked){
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
                                    alt="imgfyrirmodal"
                                                src={this.props.path}
                                          />
                        </div>

                  </div>
            )
      }
}