import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link, browserHistory } from 'react-router';

import "./post.scss";

 class Post extends Component {
      
      constructor(props){
            super(props);

            this.state = {
                  text: "",
                  headingImg: "",
                  filepath: [],
                  title: ""
            }
      }
      componentDidMount() {
            this.props.singlePost(this.props.params.id);
      }
      componentDidUpdate() {
            if(!this.state.text){
                  this.setState({
                        text: this.props.post.text,
                        title: this.props.post.title,
                        filepath: this.props.post.filePath,
                        headingImg: this.props.post.headingImg
                  });
            }
      }

      deleteMe(){
            this.props.deletePost(this.props.params.id, cb => {
                  browserHistory.push("/");
            });
      }
      changeArticle() {
            
      }

      renderDeleteButton = () => {
            console.log(this.props.authenticated);
            if(this.props.authenticated){
                  return(
                        <div>
                              <button className="btn btn-danger post--btn" onClick={this.deleteMe.bind(this)}>Eyða pósti</button>
                              <button className="btn btn-danger post--btn" onClick={this.changeArticle.bind(this)}>Breyta pósti </button>
                        </div>
                  )
            }else{
                  return ""
            }
      }

      handleOnChange = (e) => {
            this.setState({
                  text: e.target.value
            });
      }
      render() {
            const { post } = this.props;
            const ROOT_URL = "https://fierce-plateau-26257.herokuapp.com/image"
            console.log(this.state.text);
            if(!post) {
                  return <div> Loading..</div>
            }
            return ( 
                  <div className="post-container">
                        <div className="post">
                              <Link to="/"> Tilbaka á upphafssíðu </Link>
                              <div className="post--component">
                                    <h1 className="post--component__title"> {post.title}</h1>
                                    <p className="post--component__date">Birt þann {post.createdAt}</p>
                                    <img 
                                    className="post--component__headingImage"
                                    src={`${ROOT_URL}/${post.headingImg}`}
                                    />
                                    {this.props.authenticated ?  
                                    <textarea 
                                          className="post--component__text" 
                                          value={this.state.text}
                                          onChange={this.handleOnChange}></textarea>
                                          :
                                    <p className="post--component__text">{this.state.text}</p> }

                              </div>
                        </div>
                        <div className="post--component__picContainer">
                        <h4> Fylgimyndir fréttar</h4>
                        {post.filePath.map(value => {
                              return(<div className="post--component__picContainer-map"> <img 
                              key={value}
                              src={`${ROOT_URL}/${value}`}
                              />
                              <label>texti með mynd</label>
                              </div>)
                        })}
                        </div>
                        {this.renderDeleteButton()}
                  </div>
            )
      }
}

function mapStateToProps(state){
      return {
            post: state.auth.post,
            authenticated: state.auth.authenticated
      }
}


export default connect(mapStateToProps, actions)(Post);