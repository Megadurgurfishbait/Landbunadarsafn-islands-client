import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import './imageSlider.scss'
class ImageSlider extends React.Component {
      componentWillMount() {
            this.props.getFrontpageImages();
      }
    render() {
      const ROOT_URL = "https://fierce-plateau-26257.herokuapp.com/image"
      if(!this.props.images){
            return <div>Loading..</div>
      }
        return (
            <div className="slider">
                  <figure>
                  {this.props.images.map(values => {
                  return (
                        <img src={`${ROOT_URL}/${values.imgLocation}`} />
                  );
            })}
                  </figure>
            </div>
        );
    } 
};



function mapStateToProps(state){
      return ({images: state.img.frontpageData})
}
export default connect(mapStateToProps, actions)(ImageSlider);