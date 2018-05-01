import React, { Component } from 'react';
import CaptureContent from '../components/CaptureContent';

class DetailsFeat extends Component {
  render() {
    return(
      <div className="pageFeatWrap">
        <div className="pageFeat">
          <h1>Select Features That Apply To Your Space</h1>
          <CaptureContent detailsFeat={true} {...this.props} />
        </div>
      </div>
    )
  }
}

export default DetailsFeat;
