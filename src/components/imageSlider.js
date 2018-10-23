import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import config from '../config';
import "../style/myStyles/_imageSlider.scss";

class ImageSlider extends React.Component {

      componentWillMount() {
           this.props.getFrontpageImages();
      }

    render() {
      const ROOT_URL = `${config.slod}/image`;
      if(!this.props.images){
            return <div>Loading..</div>
      }
        return (
            <div className="slider-container">
                  <div className="slider">
                        {this.props.images.map(values => {
                        return (
                              <div className="slider--prufa">
                                    <img className="slide" src={`${ROOT_URL}/${values.imgLocation}`} />
                              </div>
                        );
                  })}
                  </div>
            </div>
        );
    } 
};



function mapStateToProps(state){
      return ({images: state.img.frontpageData})
}
export default connect(mapStateToProps, actions)(ImageSlider);