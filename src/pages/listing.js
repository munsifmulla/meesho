import React, { Component } from 'react';

import Nav from '../components/nav'
import Header from '../components/header'
import Posts from '../components/posts'

class Listing extends Component {

  componentDidMount(){
    console.log(this.props.match.params.tag)
  }

  render() {
    return (
      <div className="listing">
        <Header/>
        <Nav active = {this.props.match.params.tag}/>
        <Posts tag={this.props.match.params.tag}/>

      </div>
    );
  }
}

export default Listing;
