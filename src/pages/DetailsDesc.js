import React, { Component } from 'react';
import CaptureContent from '../components/CaptureContent';

class DetailsDesc extends Component {
  render() {
    return(
      <div className="pageDescWrap">
        <div className="pageDesc">
          <h1>Describe Your Space!</h1>
          <CaptureContent detailsDesc={true} {...this.props} />
        </div>
      </div>
    )
  }
}

export default DetailsDesc;
