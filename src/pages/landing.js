import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        ImagePosts
        <div className="exploreLink">
            <Link to="/all">Start</Link>
        </div>
      </div>
    );
  }
}

export default Landing;
