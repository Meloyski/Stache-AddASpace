import React, {Component} from 'react';

class Button extends Component {
  state = { addClass: false }
  toggle = (index) => {
    this.setState({addClass: !this.state.addClass});
  }

  render() {
    let selectClass = ["SelectClass"];
      if(this.state.addClass) {
        selectClass.push('Selected');
      }
    return (
      <div id={this.props.id} className={selectClass.join(' ')} onClick={this.toggle.bind(this)}>
        <img src={this.props.image} />
      </div>
    )
  }
}

export default Button;
