import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Link } from 'react-router';
import Fetcher from './fetcher';
import Portal from './Portal';
import "../style/myStyles/_images.scss";


class Images extends Component{

      componentWillMount(){
            this.props.fetchPost();

      }

      // Render'ar fréttir fyrir forsíðu. Viljum aðeins sýna fyrstu 5 fréttirnar.
      // Loadum síðan fleiri myndir með "Eldri Fréttir" takkanum.
      renderMyLink = () => {
            return (
                  <div className="relative">
                        <Fetcher className="posts" path="post" array = {this.props.posts.slice(0,4)} />

                  </div>
            )
      }

      render() {
           const {posts} = this.props;

            return(
            <div className="images">
                  <Portal>
                  <div className="post--component__title">
                        <h1>
                              Landbúnaðarsafn Íslands
                        </h1>
                  </div>
                  </Portal>

                  {posts ? this.renderMyLink(): <div> Loading</div>}
                  <Link className="images--seeMore" to="/eldrifrettir">
                        <h3> 
                              Sjá eldri fréttir
                        </h3>
                  </Link>
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
