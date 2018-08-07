import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Fetcher from './fetcher';
import ImageSlider from './imageSlider';
import './images.scss';

class Images extends Component{
      constructor(props){
            super(props);
            this.state = {};
            this.renderMyLink = this.renderMyLink.bind(this);
      }
      componentWillMount(){
            this.props.fetchPost();
           this.props.fetchEvents();
      }

      renderMyLink() {
            return (
                  <div className="relative">
                        <Fetcher className="posts" path="post" array = {this.props.posts} />
                        <div className="posts__coolshadow"></div>
                  </div>
            )
      }
      renderMyEvents() {
            return <div>  <Fetcher path="event" array = {this.props.events} /></div>
      }

      render() {
           const {posts, events} = this.props;
            {document.title = "Drasl"
            if(document.visibilityState === 'hidden'){
                  document.title = "HEY"
            }
            }
            return(
            <div>
                  
              <div className="boom">
                <ImageSlider />
              </div>
              {posts ? this.renderMyLink(): <div> Loading</div>}
            </div>
            )
      }


}

function mapStateToProps(state) {

      return {
            posts: state.auth.posts,
            events : state.event.events

      };
}

export default connect(mapStateToProps, actions)(Images);
