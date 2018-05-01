import { Route } from 'react-router-dom';
import React, { Component } from 'react';

import Address from './pages/Address'
import DetailsSize from './pages/DetailsSize'
import SpaceType from './pages/SpaceType'
import DetailsName from './pages/DetailsName'
import DetailsFeat from './pages/DetailsFeat'
import PageShell from './components/PageShell'
import Nav from './components/Nav'
import DetailsDesc from './pages/DetailsDesc'
import DetailsImage from './pages/DetailsImage'
import SpaceProfile from './pages/SpaceProfile'

class App extends Component {

  state = {
    userAddress: null,
    userSpaceType: null,
    userSpaceDesc: null,
    userSpaceFeat: null,
    userSpaceSFT: null,
    userSpacePrice: null,
    userSpaceImage: null
  }

  handlerAddress({target}) {
    this.setState({
      [target.name]: target.value
    });
  }

  // <div>
  //   Address: {this.state.userAddress} add to HTML final form
  // </div>

  render() {
    return (
      <div className="App">
        <Nav />
        <Route path="/" exact component={PageShell(Address)}></Route>
        <Route path="/space-type" exact component={PageShell(SpaceType)}></Route>
        <Route path="/details-name" exact component={PageShell(DetailsName)}></Route>
        <Route path="/details-desc" exact component={PageShell(DetailsDesc)}></Route>
        <Route path="/details-feat" exact component={PageShell(DetailsFeat)}></Route>
        <Route path="/details-size" exact component={PageShell(DetailsSize)}></Route>
        <Route path="/details-images" exact component={PageShell(DetailsImage)}></Route>
        <Route path="/profile" exact component={PageShell(SpaceProfile)}></Route>
      </div>
    );
  }
}

export default App;
