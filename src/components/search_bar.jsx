import React, { Component } from 'react';

class Searchbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ""
    }
  }
  handleUpdate = (event) => {
    this.setState({
      term: event.target.value
    })
    this.props.search(this.state.term);
  }
  render() {
    return (
      <input
      value={this.state.term}
      className="form-control form-search"
      onChange={this.handleUpdate}
      />
    );
  }
}

export default Searchbar;
