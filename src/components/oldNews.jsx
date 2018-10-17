import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Fetcher from './fetcher';

import "../style/myStyles/_oldNews.scss";
import Portal from './Portal';

class OldNews extends Component {

      constructor(props) {
            super(props);
      }
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
            return (
                  <div>
                        { posts ? this.renderMyLink() : <div> Hleður </div> }
                        <Portal> 
                              <div className="post--component__title">
                                    <h1>
                                          Eldri Fréttir
                                    </h1>
                              </div>
                        </Portal>
                  </div>
            );
      }
}
function mapStateToProps(state){
      console.log(state.auth.posts)
      return {
            posts: state.auth.posts
      }
}
export default connect(mapStateToProps, actions)(OldNews);
