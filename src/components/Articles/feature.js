import React, { Component } from "react";
import { post } from "axios";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Modal from "./modal.js";
import ShowtimeModal from "./showtimeModal.js";
import "../../style/myStyles/_feature.scss";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import Portal from '../Portal';
class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      uploadSuccess: false,
      headingPath: "",
      filePath: [],
      text: "",
      title: "",
      show: false,
      type: "",
      showtime: false,
      createdAt: "",
      pdfslod: ""
    };
  }

  showModal = e => {
    this.props.fetchImages();
    this.setState({
      show: !this.state.show,
      type: e.target.value
    });
  };
  showMeArticle = e => {
    console.log(this.state.text);
    e.preventDefault();
    this.setState({ showtime: !this.state.showtime });
  };

  handleSelected = sentValue => {
    if (typeof sentValue === "string") {
      this.setState({ headingPath: sentValue });
    } else {
      this.setState({ filePath: sentValue });
    }
  };

  onFormSubmit = e => {
    if (this.state.file === null) {
      this.setState({ uploadSuccess: false });
      return alert("Vinsamlegast veljið mynd til að setja í gagnagrunn");
    }
    e.preventDefault(); // Stop form submit
    this.fileUpload(this.state.file).then(response => {
      this.setState({ uploadSuccess: true, file: null });
      //this.state.file = null;
    });
  };

  onFileChange = e => {
    this.setState({ file: e.target.files[0], uploadSuccess: false });
  };

  fileUpload = (file) => {
         switch(this.state.file.type){
            case 'application/pdf': {
                  this.fileInput.value = "";
                  const ROOT_URL = `/pdfupload`;
                  const formData = new FormData();
                  formData.append("PDF", file);
                  const send = {
                        headers: {
                              "content-type": "multipart/form-data"
                        }
            };
            
            this.setState({
                  pdfslod: `${window.location.origin}/pdfupload/${this.state.file.name}`
            })
            return post(ROOT_URL, formData, send);
      }
            default:       
                  this.fileInput.value = "";
                  const ROOT_URL = `/upload`;
                  const formData = new FormData();
                  formData.append("file", file);
                  const send = {
                        headers: {
                        "content-type": "multipart/form-data"
                        }
                  };
                  return post(ROOT_URL, formData, send);
      }
      };

  onContentStateChange = contentState => {
    this.setState({
      text: draftToHtml(contentState)
    });
  };

  onChangetitle = e => {
    this.setState({ title: e.target.value });
  };
  onChangeDate = e => {
    this.setState({ createdAt: e.target.value });
  };

  sendArticle = () => {
    let { title, text, headingPath, filePath, createdAt } = this.state;
    this.props.sendPost(
      {
        title,
        text,
        headingPath,
        filePath,
        createdAt
      },
      () => {
        alert("Þú hefur skrifað frábæra grein. Hún er kominn í gagnagrunninn.")
      }
    );
  };

  render() {

    const { contentState } = this.state;

    return (

      <div className="form-group feature">
            <Portal>
      <div className="post--component__title">
            <h1>
                 Skrifa grein
            </h1>
      </div>
      </Portal>
        <div className="feature--headline">
          <h3 className="feature--headline__header">Skrá fyrirsögn hér inn:</h3>
          <input
            type="text"
            onChange={this.onChangetitle}
            className="feature--headline__input"
          />
          <h4 className="feature--date">Setja dagsetningu inn</h4>
          <input
            type="date"
            onChange={this.onChangeDate}
            className="feature--headline__input"
          />
        </div>
        <form onSubmit={this.onFormSubmit} className="form-group feature--form">
          <h3 className="feature--form__headline">
            Setja gögn í gagnagrunn:{" "}
          </h3>
          <input
            type="file"
            id="file"
            className="feature--form__inputfile"
            ref={ref => (this.fileInput = ref)}
            onChange={this.onFileChange}
          />
          <label
            htmlFor="file"
            className="feature--form__inputlabel feature--btn"
          >
            {" "}
            <span className="fas fa-upload feature--form__icon" /> Velja mynd eða PDF
          </label>
          {this.fileInput && !this.state.uploadSuccess ? (
            <div className="feature--form__fileinputfound">
              Mynd {this.fileInput.value} hefur verið valin.
            </div>
          ) : (
            <div className="feature--form__fileinputfound" />
          )}
          <button type="submit" id="heading" className="feature--btn ">
            Setja gögn i gagnagrunn
          </button>
          <ul style={{color: "black", listStyle: "none"}}> 
                  <h5>Til þess að setja inn pdf skjal með frétt þarf að:</h5>    
                        <li>1. Velja PDF.</li>
                        <li>2. Smella á "Setja gögn í gagnagrunn".</li>
                        <li>3. Taka afrit af þessari slóð:  {`${this.state.pdfslod}`}</li>
                        <li>4. Velja hlekkina hægra meginn hér að neðan.</li>
                        <li>5. Undir "Link Title" skal setja þann texta sem á að vera á hnappinum sem að opnar PDF skjalið.</li>
                        <li>6. Undir "Link Target" skal vista slóðina sem að við tókum afrit af áðan</li>
                        <li>7. Texti sem er smellanlegur ætti núna að vera í stóra textaboxinu. </li>
          </ul>
          {this.state.uploadSuccess ? (
            <div className="feature--form__fileinputfound">
              {" "}
              Aðgerð heppnaðist
            </div>
          ) : (
            <div className="feature--form__fileinputfound" />
          )}
        </form>
   
        <button
          type="button"
          className="feature--btn"
          value="radio"
          onClick={this.showModal}
        >
          {" "}
          Velja aðalmynd fyrir grein
        </button>
        <button
          type="button"
          className="feature--btn"
          value="checkbox"
          onClick={this.showModal}
        >
          {" "}
          Velja fylgimyndir með grein
        </button>
        <Editor
          onContentStateChange={this.onContentStateChange}
          initialContentState={contentState}
          editorClassName="editor-class"
          toolbarClassName="tooltip-class"
        />
        {/*<textarea className='form-control'  onChange={this.saveText}/>*/}
        <Modal
          show={this.state.show}
          onClose={this.showModal}
          onSelect={this.handleSelected}
          type={this.state.type}
        />
        <ShowtimeModal
          show={this.state.showtime}
          onClose={this.showMeArticle}
          title={this.state.title}
          text={this.state.text}
          mainPic={this.state.headingPath}
          secPic={this.state.filePath}
        />
        <div className="feature--btn--group">
            <button
            type="button"
            onClick={this.sendArticle}
            className="feature--btn green"
            >
            Setja grein i gagnagrunn
            </button>
            <button
            type="button"
            onClick={this.showMeArticle}
            className="feature--btn"
            >
            Sjá uppkast
            </button>
        </div>

      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    show: state.img.show
  };
}
export default connect(
  mapStateToProps,
  actions
)(Feature);
