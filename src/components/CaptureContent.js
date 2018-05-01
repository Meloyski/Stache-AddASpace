import React from 'react';
import { Link } from 'react-router-dom'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faArrowRight from '@fortawesome/fontawesome-free-solid/faArrowRight'
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft'
import faStar from '@fortawesome/fontawesome-free-solid/faStar'
import Geosuggest from 'react-geosuggest-plus'
import Button from './Button'
import SQFT from '../components/SQFT';
import ImageUpload from '../components/ImageUpload'

import UserImage from '../assets/me.jpeg'
import SpaceImage from '../assets/empty-garage.jpeg'
import TypeBedroom from '../assets/stache-type-bedroom.svg'
import TypeBasement from '../assets/stache-type-basement.svg'
import TypeGarage from '../assets/stache-type-garage.svg'
import TypeParking from '../assets/stache-type-parking.svg'
import TypeOther from '../assets/stache-type-other.svg'
import FeatClimateControl from '../assets/stache-features-climate_control.svg'
import FeatAccess from '../assets/stache-features-24_hour_access.svg'


const CaptureContent = ({address, spaceType, detailsName, detailsDesc, detailsFeat, size, images, profile, go, history}) => {
  if(address) {
    return (
      <div className="form">
        <Geosuggest
          onSuggestSelect={this.onSuggestSelect}
          placeholder="" />
        <button onClick={() => history.push('/space-type')}> <FontAwesomeIcon icon={faArrowRight} color="#fcb44d"/></button>
      </div>
    )
  }
  if(spaceType) {
    return (
      <div>
        <div className="SpaceType">
          <div className="SpaceItem" onClick={() => history.push('/details-name')}>
            <div className="SpaceImageWrap">
              <img src={TypeBedroom} />
            </div>
            <h2>Bedroom</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="SpaceItem" onClick={() => history.push('/details-name')}>
            <div className="SpaceImageWrap">
              <img src={TypeGarage} />
            </div>
            <h2>Garage</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="SpaceItem" onClick={() => history.push('/details-name')}>
            <div className="SpaceImageWrap">
              <img src={TypeBasement} />
            </div>
            <h2>Basement</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="SpaceItem" onClick={() => history.push('/details-name')}>
            <div className="SpaceImageWrap">
              <img src={TypeParking} />
            </div>
            <h2>Parking</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="SpaceItem" onClick={() => history.push('/details-name')}>
            <div className="SpaceImageWrap">
              <img src={TypeBedroom} />
            </div>
            <h2>Other</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </div>
    )
  }
  if(detailsName) {
    return (
      <div>
        <div className="form">
          <input type="text" placeholder="Spare Bedroom Close To Campus" />
          <button onClick={() => history.push('/details-desc')}> <FontAwesomeIcon icon={faArrowRight} color="#fcb44d"/></button>
        </div>
      </div>
    )
  }
  if(detailsDesc) {
    return (
      <div>
        <textarea type="text" placeholder="Available April 23 - August 17. Spacious room. Quiet, safe neighborhood, close to campus." />
        <Link to="/details-feat"><button>Continue</button></Link>
      </div>
    )
  }
  if(detailsFeat) {
    return (
      <div>
        <div className="DetailsFeat">
          <div>
            <Button
              id='Access'
              image={FeatAccess} />
            <p>24-Hour Access</p>
          </div>
          <div>
            <Button
              id='ClimateControl'
              image={FeatClimateControl} />
            <p>Climate controlled</p>
          </div>
        </div>
        <Link to="/details-size"><button>Continue</button></Link>
      </div>
    )
  }
  if(size) {
    return (
      <div>
        <SQFT/>
      </div>
    )
  }
  if(images) {
    return (
      <div>
        <div className="UploadRow">
          <ImageUpload />
        </div>
        <Link to="/profile"><button>Continue</button></Link>
        <Link className="skip" to="/profile">Skip For Now</Link>
      </div>
    )
  }
  if(profile) {
    const imageStyle = {
      backgroundImage: 'url(' + SpaceImage + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
    return (
      <div className="SpaceInfo">
        <div className="SpaceEdit">
          <h1>This Is Your Space!</h1>
          <div>
            <button className="spaceEditBTN" onClick={() => history.push('/')}>Edit This Space</button>
            <button className="spaceSaveBTN" onClick={() => history.push('/')}>Save This Space</button>
          </div>
        </div>
        <div style={imageStyle} className="UserSpaceImage">

        </div>
        <div className="UserSpaceInfo">
          <div className="SpaceTitle">
            <div>
              <h2>Empty Garage Downtown</h2>
              <p>Hampton Park, Charleston, SC | Garage</p>
            </div>
            <div className="spaceUser">
              <div className="spaceUserInfo">
                <h5>Meloyski</h5>
                <div className="userRating">
                  <FontAwesomeIcon icon={faStar} color="#fcb44d"/>
                  <FontAwesomeIcon icon={faStar} color="#fcb44d"/>
                  <FontAwesomeIcon icon={faStar} color="#fcb44d"/>
                  <FontAwesomeIcon icon={faStar} color="#fcb44d"/>
                  <FontAwesomeIcon icon={faStar} color="#fcb44d"/>
                </div>
              </div>
              <div className="spaceUserImage">
                <img src={UserImage}/ >
              </div>
            </div>
          </div>
          <div className="SpaceDesc">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className="SpacePrice">
            <div className="price">
              <h2>$225</h2><span>/ per month</span>
              <p>150 Square Feet | 24-Hour Access | Climate Controlled</p>
            </div>
            <div className="priceCTA">
              <button onClick={() => history.push('/')}>Request To Book</button>
            </div>
          </div>
        </div>
      </div>

    )
  }
}



export default CaptureContent;
