import React, { Component } from 'react';
import CaptureContent from '../components/CaptureContent';
class DetailsName extends Component {
  render() {
    return(
      <div className="pageNameWrap">
        <div className="pageName">
          <h1>Give Your Space A Name!</h1>
          <CaptureContent detailsName={true} {...this.props} />
        </div>
      </div>
    )
  }
}

export default DetailsName;
