import React, { Component } from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import config from '../config';
import "../style/myStyles/_myPictures.scss";


class MyPictures extends Component {
      constructor() {
            super();
            this.state = {
                  selectedImages: []
            }
      }
      handleCheckboxChange =(e) => {
            if(e.target.checked){
                  this.setState({selectedImages: [...this.state.selectedImages, e.target.id]});
            }else{
                  let newArray = this.state.selectedImages.filter(m => m!== e.target.id);
                  this.setState({selectedImages: newArray});
            }     
      }
      seeState = () =>{
            
            this.state.selectedImages.map(values => {
                  this.props.deleteImage(values);
                  this.props.deleteImageChunks(values);
                alert("Myndum hefur verið eytt");
                return values;
            })
      }

      onClose = (e) => {
            browserHistory.push("/");
      }

      componentWillMount() {
            this.props.fetchImages();
      }
      render() {
        
            const ROOT_URL = `${config.images}`;
            const {images} = this.props;
            if(!images){
                  return <div> Er að hugsa, bíddu í augnablik.  </div>
            }
            console.log(images);
            return (
                  <div className="myPictures">
                         <h1>Yfirlit yfir myndir í myndasafni.</h1>
                        <p> Hakaðu við þær myndir sem að þú vilt eyða. </p>
                        <div className="myPictures--container">
                              {images.map((values) => {
                                    console.log(values, "Values");
                                    return (
                                    <div className="myPictures--container__card" key={values._id}>
                                    <input className="myPictures--container__card--input" type="checkbox" id={values._id} onChange={this.handleCheckboxChange} />
                                          <label htmlFor={values._id} className="myPictures--container__card--label"></label>
                                                <img alt="myndir í safni" className = "myPictures--container__card--image"src={`${ROOT_URL}/${values.Key}`}/> 
                                                {console.log(`${ROOT_URL}/${values.key}`)}
                                    </div>
                                    )
                              })}
                              
                        </div>
                        <button type="button" className="feature--btn" onClick={this.seeState}>Eyða mynd úr myndasafni</button>
                        <button className="feature--btn" onClick={(e) => {this.onClose(e)}}> Loka </button>
                  </div>
            );
      }
}

function mapStateToProps(state){
      return ({images: state.img.data})
}
export default connect(mapStateToProps, actions)(MyPictures);
