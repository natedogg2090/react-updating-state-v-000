import React from 'react';
 
export default class LightSwitch extends React.Component {
  constructor() {
    super();
    this.state = {
      toggled: false
    };
  }
 
  handleClick = () => {
    this.setState(previousState => {
      return {
        toggled: !previousState.toggled
      }
    })
  }
 
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
      </div>
    );
  }
}