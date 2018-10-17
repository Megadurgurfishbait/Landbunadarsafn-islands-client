import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ModalImage from './modalImage';

import '../../style/myStyles/_modal.scss';

class Modal extends Component {
      constructor() {
            super();
            this.state = ({
                  headlineImg: "",
                  imgpath: [],
                  type: ""
            });
      }
      onClose = (e) => {
            this.props.onClose && this.props.onClose(e);
      }
      
      handleSubmit = (e) => {
            e.preventDefault();
            if(this.props.type === "radio"){
                  this.props.onSelect(this.state.headlineImg)
            }
            if(this.props.type === "checkbox") {
                  this.props.onSelect(this.state.imgpath);
                  
            }
            this.props.onClose && this.props.onClose(e);
      }
      handleChange = (e) =>{

           if(this.props.type === "radio"){
                 this.setState({
                       headlineImg: e.target.id
                 })
           }
           if(this.props.type === "checkbox"){
                  this.setState({
                        imgpath: [...this.state.imgpath, e.target.id]
                  });
           }
      
}
      
      render() {

           const { images } = this.props;
            const ROOT_URL = "https://fierce-plateau-26257.herokuapp.com/image";

            if(!this.props.show || !images){
                  return null;
            }
            return (
                  
                  <div className="myModal"> 
                        <h3 className="myModal--headline">Velja mynd</h3>
                        <form onSubmit={this.handleSubmit} >
                              <div className="myModal--display">
                              {images.map((value) => {
                                    return (
                                          <ModalImage 
                                          type = {this.props.type}
                                          key = {value._id}
                                          id = {value.filename}
                                          path={`${ROOT_URL}/${value.filename}`}
                                          onHandleChange={this.handleChange}
                                          />
                                    )
                              })}
                              </div>
                        <div className="myModal--btn">
                              <input className="feature--btn" type="submit" value="Velja mynd"/> 
                              <button className="feature--btn" onClick={(e) => { this.onClose(e)}  }> Loka </button> 
                        </div>
                         </form>

                  </div>
            )
      }
}
function mapStateToProps(state){
      return {images: state.img.data};
}

export default connect(mapStateToProps, actions)(Modal);