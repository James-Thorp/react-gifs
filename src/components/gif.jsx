import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props)
  }
  handleClick = (event) => {
    this.props.handleClick(this.props.id)
  }

  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/giphy.webp?`
    return (
      <img onClick={this.handleClick} src={src} alt="" className="gif"/>
    );
  }
}

export default Gif;
