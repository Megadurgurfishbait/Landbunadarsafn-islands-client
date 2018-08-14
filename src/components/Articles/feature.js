import React, { Component } from 'react';
import axios, { post } from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Modal from './modal.js';
import ShowtimeModal from "./showtimeModal.js";
import {browserHistory} from 'react-router';

import './feature.scss'

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state ={
      file:null,
      uploadSuccess: false,
      headingpath: "",
      path: [],
      text: "",
      title: "",
      show: false,
      type: "",
      showtime: false
    }
  }

showModal = (e) => {
      this.props.fetchImages();
      this.setState({
            show: !this.state.show,
            type: e.target.value
      })
}
  showMeArticle = (e) => {

        e.preventDefault();
        this.setState({showtime: !this.state.showtime})
  }

  handleSelected = (sentValue) => {

        if(typeof sentValue === "string"){ this.setState({ headingpath: sentValue})}     
        else{this.setState({path:  sentValue})
        }
  }

  onFormSubmit = (e) => {
      if(this.state.file === null){
            this.setState({uploadSuccess: false});
            return alert("Vinsamlegast veljið mynd til að setja í gagnagrunn");
      }
      e.preventDefault() // Stop form submit   
      this.fileUpload(this.state.file).then((response)=>{
            this.setState({uploadSuccess: true})
            this.state.file = null;
      })
  }

  onFileChange = (e) => {
    this.setState({file:e.target.files[0]})
    this.state.uploadSuccess = false;
  }

  fileUpload = (file) =>{
      this.fileInput.value= "";
    const ROOT_URL = "https://fierce-plateau-26257.herokuapp.com/upload";
    const formData = new FormData();
    formData.append('file', file);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return post(ROOT_URL, formData,config)
  }

  saveText = (e) => {
      this.setState({text: e.target.value});      
  }

  onChangetitle = (e) => {
      this.setState({title: e.target.value});
  }

  sendArticle = () => {
      if(!this.state.text || !this.state.title){ return alert("Nauðsynlegt er að fylla út að minnsta kosti fyrirsögn og meginmál greinar.");}

      this.props.sendPost({
            title: this.state.title,
            text: this.state.text,
            headingPath: this.state.headingpath,
            filePath: this.state.path
      }, () =>{
            browserHistory.push("/");
      });
  }

  render() {
    const ROOT_URL = "https://fierce-plateau-26257.herokuapp.com/image";
    return (
      <div className="form-group feature">
            <div className="feature--headline">
                  <h3 className="feature--headline__header">Skrá fyrirsögn hér inn:</h3>
                  <input type="text" onChange={this.onChangetitle} className="feature--headline__input"/>
            </div>
            <form  onSubmit={this.onFormSubmit} className="form-group feature--form">
                  <h3 className="feature--form__headline">Setja nýja mynd í gagnagrunn: </h3>
                   <input type="file" id="file"  className="feature--form__inputfile" ref={ref => this.fileInput = ref} onChange={this.onFileChange}  />
                  <label htmlFor="file" className="feature--form__inputlabel feature--btn"> <span className="fas fa-upload feature--form__icon"></span>Velja mynd til að setja í myndasafn</label>
                  {this.fileInput && !this.state.uploadSuccess  ? (<div className="feature--form__fileinputfound">Mynd {this.fileInput.value} hefur verið valin.</div>): <div className="feature--form__fileinputfound"></div>}
                   <button type="submit" id="heading" className="feature--btn" >Setja mynd i gagnagrunn</button>
                  {this.state.uploadSuccess ? (<div className="feature--form__fileinputfound"> Aðgerð heppnaðist</div>) : <div className="feature--form__fileinputfound"></div>}
            </form>
            <button type="button" className="feature--btn" value="radio" onClick={this.showModal}> Velja aðalmynd fyrir grein</button>
            <button type="button" className="feature--btn" value="checkbox" onClick={this.showModal}> Velja fylgimyndir með grein</button>
            <textarea className='form-control'  onChange={this.saveText}/>
            <Modal 
                  show={this.state.show}
                  onClose={this.showModal}
                  onSelect={this.handleSelected}
                  type={this.state.type}/>         
            <ShowtimeModal 
                  show={this.state.showtime}
                  onClose={this.showMeArticle}
                  title={this.state.title}
                  mainPic={this.state.headingpath}
                  text={this.state.text}
                  secPic={this.state.path}/>
            <button type="button" onClick={this.sendArticle} className="btn btn-primary">Setja grein i gagnagrunn</button>
            <button type="button" onClick={this.showMeArticle} className="btn btn-primary">Sjá uppkast</button>
      </div>
         )
  }
}
function mapStateToProps(state) {
      return {
            errorMessage: state.auth.error,
            show: state.img.show
      };
}
export default connect(mapStateToProps, actions)(Feature);


