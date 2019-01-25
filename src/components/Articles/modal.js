import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ModalImage from './modalImage';
import config from '../../config';
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
            // Ef að ID er ekki til er í lagi að setja það í state.
            if(!this.checkId(e.target.id)){
                  this.setState({
                        imgpath: [...this.state.imgpath, e.target.id]
                  })
            } 
            // Ef að ID er til  þá tökum við það út úr imgpath, gerum nýtt array og setjum það sem nyja state'ið í imgpath
            else {
                  this.setState({
                        imgpath : this.state.imgpath.filter(function(item){
                              return item !== e.target.id
                        })
                  })
            }
      }
}
      // Er ID til í imgpath?
      checkId = (id) => {
            var isMatch = this.state.imgpath.some(function(item) {
                  return item === id;
            })
            return isMatch;
      }

      render() {

           const { images } = this.props;
           const ROOT_URL = `${config.images}`;
            
            if(!this.props.show || !images){
                  return null;
            }
            return (
                  
                  <div className="myModal"> 
                        <h3 className="myModal--headline">Velja mynd</h3>
                        <form onSubmit={this.handleSubmit} >
                              <div className="myModal--display">
                              {images.slice(1).map((value) => {
                                    return (
                                          <ModalImage 
                                          type = {this.props.type}
                                          key = {value.ETag}
                                          id = {value.Key}
                                          path={`${ROOT_URL}/${value.Key}`}
                                          onHandleChange={this.handleChange}
                                          />
                                    )
                              })}
                              </div>
                        <div className="myModal--btn">
                              <input className="feature--btn myModal--btn--fat" type="submit" value="Velja mynd"/> 
                              <button className="feature--btn myModal--btn--fat" onClick={(e) => { this.onClose(e)}  }> Loka </button> 
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