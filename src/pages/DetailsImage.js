import React, { Component } from  'react';
import CaptureContent from '../components/CaptureContent';

class DetailsImage extends Component {
  render() {
    return (
      <div className="pageImageWrap">
        <div className="pageImage Upload">
          <h1>Add Some Photos!</h1>
          <p>Renters are far more likely to book your space if you have some good pics.</p>
          <CaptureContent images={true} {...this.props} />
        </div>
      </div>
    )
  }
}

export default DetailsImage;
