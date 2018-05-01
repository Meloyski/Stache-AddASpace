import React, { Component } from 'react';
import CaptureContent from '../components/CaptureContent';

class Address extends Component {
  render() {
    return(
      <div className="pageAddressWrap">
        <div className="pageAddress">
          <h1>What&#39;s your address?</h1>
          <CaptureContent address={true} {...this.props} />
        </div>
      </div>
    )
  }
}

export default Address;
