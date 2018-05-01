import React, { Component } from 'react';
import CaptureContent from '../components/CaptureContent';

class SpaceProfile extends Component {
  render() {
    return(
      <div className="pageProfileWrap">
        <div className="pageProfile">
          <CaptureContent profile={true} {...this.props}/>
        </div>
      </div>
    )
  }
}

export default SpaceProfile;
