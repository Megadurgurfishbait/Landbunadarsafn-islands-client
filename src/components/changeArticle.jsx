import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class changeArticle extends Component {  
      constructor(props){
            super(props);
            console.log("HER", props);
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

      handleTextareaChange = (e) => {
            this.setState({text: e.target.value});
            console.log(this.state.text);
      }

      render() {
      const { post } = this.props;
       if(!post) {
            return <div> Loading..</div>
      }
      
        return (
              <div>
                    <h1>{post.title}</h1>
                    <textarea
                        type="text"
                        value={this.state.text}
                        onChange={this.handleTextareaChange}
                    />
              </div>
        );
      }
    }


    
function mapStateToProps(state){
      return {
            post: state.auth.post
      }
}


export default connect(mapStateToProps, actions)(changeArticle);