import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Fetcher from './fetcher';
import Portal from './Portal';
import "../style/myStyles/_oldNews.scss";


class OldNews extends Component {

      componentWillMount(){
            this.props.fetchPost();
      }

      renderMyLink = () =>{
            return (
                  <div className="relative-oldNews">
                        <Fetcher className="oldNews" path="post" type="oldNews" array = {this.props.posts} />
                  </div>
            )
      }

      render() {
            const {posts} = this.props;
            console.log(posts);
            return (
                  <div>
                  <Portal>
                        <div className="post--component__title">
                              <h1>
                                    Eldri fréttir
                              </h1>
                        </div>
                  </Portal>
                        { posts ? this.renderMyLink() : <div> Hleður </div> }
                  </div>
            );
      }
}
function mapStateToProps(state){
      return {
            posts: state.auth.posts
      }
}
export default connect(mapStateToProps, actions)(OldNews);
