import React, { Component } from 'react';
import CaptureContent from '../components/CaptureContent';

class DetailsSize extends Component {
  render() {
    return(
      <div className="pageSizeWrap">
        <div className="pageSize">
          <h1>How big is your space?</h1>
          <CaptureContent size={true} {...this.props}/>
        </div>
        </div>
    )
  }
}

export default DetailsSize;
