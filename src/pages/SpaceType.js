import React, { Component } from 'react';
import CaptureContent from '../components/CaptureContent';
class SpaceType extends Component {
  render() {
    return(
      <div className="pageTypeWrap">
        <div className="pageType">
          <h1>What kind of space is it?</h1>
          <CaptureContent spaceType={true} {...this.props} />
        </div>
      </div>
    )
  }
}

export default SpaceType;
