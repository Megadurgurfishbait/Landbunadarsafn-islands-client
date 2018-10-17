import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link, browserHistory } from 'react-router';
import Portal from './Portal';
import "../style/myStyles/_post.scss";



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
      componentWillMount() {
            this.props.singlePost(this.props.params.id);
      }
      deleteMe(){
            this.props.deletePost(this.props.params.id, cb => {
                  browserHistory.push("/");
            });
      }

      renderDeleteButton = () => {
            if(this.props.authenticated){
                  return(
                        <div>
                              <button className="btn btn-danger post--btn" onClick={this.deleteMe.bind(this)}>Eyða pósti</button>
                              <button className="btn btn-danger post--btn" onClick={this.changeArticle.bind(this)}>Breyta pósti </button>
                        </div>
                  )
            }else{
                  return ;
            }
      }

      handleOnChange = (e) => {
            this.setState({
                  text: e.target.value
            });
      }
      render() {
            const ROOT_URL = "https://fierce-plateau-26257.herokuapp.com/image";
            if(!this.props.post  || this.props.post._id != this.props.params.id) {
                  return <div className="post-loading"> Loading..</div>
            }    
            return ( 
                  <div className="post-container">
                        <div className="post">
                              <div className="post--component">
                                    <img 
                                    className="post--component__headingImage"
                                    src={`${ROOT_URL}/${this.props.post.headingImg}`}
                                    />
                                    {this.props.authenticated ?  
                                    <textarea 
                                          className="post--component__text" 
                                          value={this.props.post.text}
                                          onChange={this.handleOnChange}></textarea>
                                          :
                                    <p className="post--component__text">{this.props.post.text}</p> }

                              </div>

                        </div>
                        
                        <div className="post--component__picContainer">
                        <Portal>
                              <div className="post--component__title"> 
                                    <h1>{this.props.post.title}</h1>
                                    <h5>{this.props.post.createdAt}</h5>
                              </div>
                        </Portal>
                        {console.log("Props", this.props.post.filePath.length)}
                        {this.props.post.filePath.length != 0 ? <Fragment>
                                                                                                <div className="post--component__textContainer">
                                                                                                      <h4> Fylgimyndir fréttar</h4>
                                                                                                </div>
                                                                                                <div className="post--component__picContainer-map">
                                                                                                { this.props.post.filePath.map(value => {
                                                                                                      return(<div> 
                                                                                                            <img 
                                                                                                            key={value}
                                                                                                            src={`${ROOT_URL}/${value}`}
                                                                                                            />

                                                                                                      </div>)
                                                                                                })}
                                                                                                </div>
                                                                                                </Fragment> 
                                                                                          :null }
                        <Link className="post--link" to="/"> <h4> Tilbaka á upphafssíðu </h4> </Link>
                        </div>

                        {this.renderDeleteButton()}
                  </div>
            )
            
      }
}

function mapStateToProps(state){
      console.log(state.auth.post)
      return {
            post: state.auth.post,
            authenticated: state.auth.authenticated
      }
}


export default connect(mapStateToProps, actions)(Post);