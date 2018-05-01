import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faArrowRight from '@fortawesome/fontawesome-free-solid/faArrowRight'

class SQFT extends Component {
  state = {
    value: '100'
  }
  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  render(histoy) {
    let result = this.state.value * 1.5;
    return (
      <div id="SpaceSize">
        <div id="SQFT" className="form">
          <input
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <span>Square Feet</span>
        </div>
        <h3>Set Your Price!</h3>
        <p>We recommend <strong>${result} per month</strong> for your entire space. Your space&#39;s price will be adjusted to match the sq ft the renter needs.</p>
        <div className="form">
          <h2>$</h2>
          <input
            type="text"
            placeholder={result}  />
          <Link to="/details-images"><button><FontAwesomeIcon icon={faArrowRight} color="#fcb44d"/></button></Link>
        </div>
      </div>
    );
  }
}


export default SQFT;
