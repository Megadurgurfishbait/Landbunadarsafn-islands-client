import React, { Component } from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import './frontpagePics.scss';

class FrontpagePics extends Component {
      constructor() {
            super();
            this.state = {
                  frontpageImages: []
            }
      }
      handleCheckboxChange =(e) => {
            console.log(e.target.name)
            if(e.target.checked){
                  this.setState({frontpageImages: [...this.state.frontpageImages, e.target.name]});
            }else{
                  let newArray = this.state.frontpageImages.filter(m => m!== e.target.name);
                  this.setState({frontpageImages: newArray});
            }     
      }

      seeState = () =>{
            this.state.frontpageImages.map(values => {
                  let value = {imgLocation: values};
                  this.props.setFrontpageImages(value, callback => {
                        console.log("Mynd Set Inn");
                  });
            });
            window.location.reload();
      }

      componentWillMount() {
            this.props.fetchImages();
            this.props.getFrontpageImages();
      }

      deleteImages = (e) => {

            if (window.confirm('Ertu viss um að þú viljir eyða myndinni?')) {
                  this.props.removeFrontpageImage(e.target.id, callback => {
                        alert("Myndinni hefur verið eytt");
                        window.location.reload();
                  });
              } else {
                  // Do nothing!
              }
      }
      render() {

            const ROOT_URL = "https://fierce-plateau-26257.herokuapp.com/image"
            const {images, frontpageimages} = this.props;
            if(!images){
                  return <div> Engar myndir í safni  </div>
            }
            return (
                  <div className="frontpage">
                        <div className="frontpage--chosen">
                              <h1 className="frontpage--chosen__title">Myndir sem eru þegar á forsíðu </h1>
                              <div className="frontpage--chosen__picturecontainer">
                                    {frontpageimages.map((values) => {
                                          let {imgLocation} = values;
                                          return (
                                                <div key={imgLocation}  className="frontpage--chosen__picturecontainer-button">
                                                      <button>
                                                            <img className="frontpage--chosen__picturecontainer-button-img"    id={imgLocation}  src={`${ROOT_URL}/${imgLocation}`}  onClick={this.deleteImages}/>
                                                      </button>
                                                </div>
                                          )
                                    })}
                              </div>
                              <h5>Smeltu á mynd til að eyða henni af forsíðu</h5>
                        </div>
                        <div className="frontpage--choose">
                               <div className="frontpage--choose__container">
                                    {images.map((values) => {
                                          return (
                                          <div className="frontpage--choose__container-card" key={values._id}>
                                                <input className="frontpage--choose__container-card-input" type="checkbox" name={values.filename} id={values._id} onChange={this.handleCheckboxChange} />
                                                <label htmlFor={values._id} className="frontpage--choose__container-card-label"></label>
                                                      <img className="frontpage--choose__container-card-img" src={`${ROOT_URL}/${values.filename}`}/>
                                          </div>
                                          )
                                    })}

                              </div>
                        </div>
                        <button className="frontpage--button feature--btn" type="button" onClick={this.seeState}>Velja myndir</button>
                  </div>
            );
      }
}

function mapStateToProps(state){
      return ({
            images: state.img.data,
            frontpageimages: state.img.frontpageData
      })
}
export default connect(mapStateToProps, actions)(FrontpagePics);
