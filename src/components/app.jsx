import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';


class App extends Component {
  constructor(props) {
    super(props)

  this.state = {
    gifs: [],
    selectedGifId: '2UtegbQgkGyQOjMSko'
  }
  this.search('homer thinking')
}

updateGifId = (input) => {
  this.setState({
    selectedGifId: input
  })
}

  search = (query) => {
    giphy(process.env.REACT_APP_API_KEY).search({
      q: query,
      rating: 'g',
      limit: 10
      }, (err, result) => {
        this.setState({
          gifs: result.data});
      });
    }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
          <div className="selected-gif">
            <Gif nowHome={this.nowHome} id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">

          <GifList updateGifId={this.updateGifId} gifs={this.state.gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
