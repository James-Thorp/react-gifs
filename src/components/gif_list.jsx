import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  constructor(props) {
    super(props)
  }
  handleClick = (input) => {
    this.props.updateGifId(input)
  }
  renderList = () => {
    return this.props.gifs.map(gif => <Gif handleClick={this.handleClick} id={gif.id} key={gif.id}/>)
  } 

  render() {
    return (
      <div className="gif-list">
          {this.renderList()}
      </div>
    )
  }
}

export default GifList;
