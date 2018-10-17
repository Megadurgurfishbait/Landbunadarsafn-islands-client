import React, { Component } from 'react';
import '../../style/myStyles/_post.scss';

class showtimeModal extends Component {

      onClose = (e) => {
            this.props.onClose && this.props.onClose(e);
      }
      render() {
            const ROOT_URL = "https://fierce-plateau-26257.herokuapp.com/image";
            if(!this.props.show){
                  return null;
            }
            return (
                  <div className="myModal">
                        <div className="post-container">
                              <div className="post">
                                    {this.props.title ? (<h2 className="post--component__title">{this.props.title}</h2>): ""}
                                    {this.props.mainPic ? (<img alt="Aðalmynd" className="post--component__headingImage" src={`${ROOT_URL}/${this.props.mainPic}`} />): ""}
                                    <div className="post--component__text">{this.props.text}</div>
                              </div>
                              <div className="post--component__picContainer">
                                    {this.props.secPic ? (  this.props.secPic.map(value => {
                                          return (
                                          <img alt="Auka myndir með frétt" className="img-thumbnail" key={value} src={`${ROOT_URL}/${value}`}/>
                                          )
                                    })) : <div> Hér koma myndirnar </div>}
                              </div>
                              <button className="btn btn-danger post--btn" onClick={(e) => {this.onClose(e)}}> Close </button>
                        </div>
                       
                  </div>
            );
      }
}


export default showtimeModal;
